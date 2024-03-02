export async function getData(url: RequestInfo | URL) {
  const promise = await fetch(url)
  const resultData = await promise.json()
  console.log(resultData)
  return resultData
}
