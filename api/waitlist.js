export const config = { runtime: 'edge' };

export default async function handler(req) {
  const { email } = await req.json();
  
  const res = await fetch('https://api.resend.com/audiences/ccc3a76a-c255-4ad8-82f8-57cbb819ae6c/contacts', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer re_7iEjTUqC_EMAw3WJrR2XGb2kN2ZKcQXRJ',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, unsubscribed: false })
  });

  const data = await res.json();
  return Response.json({ ok: res.ok, data });
}
