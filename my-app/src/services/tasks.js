export default async function getTasks() {
  const data = await fetch('/api/tasks');
  return data.json();
}
