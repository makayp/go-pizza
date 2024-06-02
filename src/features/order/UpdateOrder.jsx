import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  const isLoading =
    fetcher.state === "loading" || fetcher.state === "submitting";

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={isLoading}>
        {isLoading ? "Updating..." : "Make Priority"}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
