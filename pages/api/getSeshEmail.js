
import { getSession, useSession  } from "next-auth/react"





export default async function handle(req, res) {
    const  session  = await getSession(req)
 
  if (!session) {
    const email = await session;
    console.log(session);
    res.json(email);
  } else {
    res.send([]);
    console.log('not working')
  }
}
