import controller from "infra/controller.js";
import session from "models/session.js";
import user from "models/user.js";
import { createRouter } from "next-connect";

const router = createRouter();

router.get(getHandler);

export default router.handler(controller.errorHandlers);

async function getHandler(request, response) {
  const sessionToken = request.cookies.session_id;

  const sessionObject = await session.findOneValidByToken(sessionToken);
  const renewedSessionObejct = await session.renew(sessionObject.id);
  controller.setSessionCookie(renewedSessionObejct.token, response);

  const userFound = await user.findOneById(sessionObject.user_id);

  response.setHeader(
    "Cache-Control",
    "no-store, no-cache, max-age=0, must-revalidate",
  );

  response.status(200).json(userFound);
}
