import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  // axios req to /police/bills
  const data = [
    {
      vehicleNum: "KA-01-MC-1234",
      fine: 1000,
    },
    {
      vehicleNum: "KA-01-MC-1235",
      fine: 2000,
    },
  ];
  return (
    <Tabs defaultValue="Bills" className="w-[800px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Bills">Bills</TabsTrigger>
        <TabsTrigger value="enquire">Enquire</TabsTrigger>
      </TabsList>
      <TabsContent value="Bills">
        <Card>
          <CardHeader>
            <CardTitle>Bills</CardTitle>
            <CardDescription>
              All the users who are did not pay bills yet.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Map through all the  */}
            {data.map((bill, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{bill.vehicleNum}</p>
                  <p className="text-sm text-gray-500">Fine: {bill.fine}</p>
                </div>
                <Button variant="destructive">Pay</Button>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="enquire">
        <Card>
          <CardHeader>
            <CardTitle>Enquire</CardTitle>
            <CardDescription>
              Change your enquire here. After saving, youll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current enquire</Label>
              <Input id="current" type="enquire" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New enquire</Label>
              <Input id="new" type="enquire" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save enquire</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
