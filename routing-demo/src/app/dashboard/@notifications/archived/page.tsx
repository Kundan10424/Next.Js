import { Card } from "@/src/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div>
        <Link href="/dashboard">Default</Link>
      </div>
    </Card>
  );
}