import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />

      <h1>Database</h1>
      <Database />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualiazação: {updatedAtText}</div>;
}

function Database() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let maxConnectionsText = 0;
  let openedConnectionsText = 0;
  let versionText = 0;

  if (!isLoading && data) {
    maxConnectionsText = data.dependencies.database.max_connections;
    openedConnectionsText = data.dependencies.database.opened_connections;
    versionText = data.dependencies.database.version;
  }

  return (
    <>
      <div>Conexões abertas: {maxConnectionsText}</div>
      <div>Limite de conexões: {openedConnectionsText}</div>
      <div>Versão do banco de dados: {versionText}</div>
    </>
  );
}
