import { Card } from "@/src/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link className="underline decoration-blue-500 text-blue-500" href="/dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}