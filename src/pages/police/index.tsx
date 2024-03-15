import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
    <div className="min-h-screen flex justify-center items-center">
      <Tabs defaultValue="Bills" className="w-[800px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Bills">Bills</TabsTrigger>
          <TabsTrigger value="enquire">Enquire</TabsTrigger>
        </TabsList>
        <TabsContent value="Bills">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Bills</CardTitle>
              <CardDescription>
                All the users who are did not pay bills yet.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Map through all the  */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vehicle Number</TableHead>
                    <TableHead>Total Bill</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((bill, index) => (
                    <TableRow key={index}>
                      <TableCell className="">{bill.vehicleNum}</TableCell>
                      <TableCell className="">{bill.fine}</TableCell>
                      <TableCell className="flex justify-end">
                        <Button>Create Warrant</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="enquire">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Enquire</CardTitle>
              <CardDescription>
                Change your enquire here. After saving, youll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex gap-12 ">
                <div className="space-y-1 w-full">
                  <Label htmlFor="current">Lattitude</Label>
                  <Input id="current" type="text" inputMode="numeric" />
                </div>
                <div className="space-y-1 w-full">
                  <Label htmlFor="new">Longitude</Label>
                  <Input id="new" type="text" inputMode="numeric" />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="warrant">Warrant</Label>
                <Input id="warrant" type="file" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Search Vehicles</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
