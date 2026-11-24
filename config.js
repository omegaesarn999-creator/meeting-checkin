// ค่าการเชื่อมต่อฐานข้อมูล (คีย์นี้เป็นคีย์สาธารณะ เปิดเผยได้ — ข้อมูลเข้าถึงได้ผ่านฟังก์ชันที่กำหนดไว้เท่านั้น)
window.MC_CONFIG = {
  url: "https://vhrexjmzdcvlojzanvum.supabase.co",
  key: "sb_publishable_47xRsvJMYfqk1XSlW6qjaQ_8ABKblB5",
};

window.mcRpc = async function (fn, args) {
  const C = window.MC_CONFIG;
  const res = await fetch(C.url + "/rest/v1/rpc/mc_" + fn, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: C.key, Authorization: "Bearer " + C.key },
    body: JSON.stringify(args || {}),
  });
  let data = null;
  try { data = await res.json(); } catch (e) { /* empty body */ }
  if (!res.ok) throw new Error((data && data.message) || "เชื่อมต่อไม่สำเร็จ (" + res.status + ")");
  return data;
};
