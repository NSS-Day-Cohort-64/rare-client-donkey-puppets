export const createSubscription = async (newSubscription) => {
  const response = await fetch("http://localhost:8088/subscriptions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newSubscription)
  })
  const createdSubscription = await response.json()
  return createdSubscription
}
