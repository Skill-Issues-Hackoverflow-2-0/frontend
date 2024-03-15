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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { DateTimePickerDemo } from "@/components/ui/DateTimePicker/DateTimePicker";
import { Calendar } from "@/components/ui/calendar";
import { TimePicker } from "@/components/ui/DateTimePicker/timePicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function TabsDemo() {
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);

  const [date, setDate] = useState<Date | undefined>();

  // axios req to /police/bills
  const data = [
    {
      vehicleNum: "KA-01-MC-1234",
      crime: "Traffic light skip",
      fine: 1000,
    },
    {
      vehicleNum: "KA-01-MC-1235",
      crime: "Overspeed",
      fine: 2000,
    },
  ];

  // axios req to /police/enquire
  const [enquireFetch, setEnquireFetch] = useState(false);
  const [enquireData, setEnquireData] = useState<
    { vehicleNum: string; location: string }[]
  >([]);

  useEffect(() => {
    if (!enquireFetch) return;
    // axios req to /police/enquire
    setEnquireData([
      {
        vehicleNum: "KA-01-MC-1234",
        location: "12.971615° N, 77.594611° E",
      },
      {
        vehicleNum: "KA-01-MC-1235",
        location: "12.971616° N, 77.594610° E",
      },
    ]);
    setEnquireFetch(false);
  }, [enquireFetch]);
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
                      <TableCell className="">{bill.crime}</TableCell>
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
            <CardContent className="space-y-5">
              <div className="flex gap-6 ">
                <div className="space-y-1 w-full">
                  <Label htmlFor="current">Lattitude</Label>
                  <Input
                    id="current"
                    type="text"
                    inputMode="numeric"
                    onSubmit={(e) => {
                      setLat(Number(e.currentTarget.value));
                    }}
                  />
                </div>
                <div className="space-y-1 w-full">
                  <Label htmlFor="new">Longitude</Label>
                  <Input id="new" type="text" inputMode="numeric" />
                </div>
              </div>
              <div className="w-full flex justify-between gap-6">
                <div className="flex flex-col gap-1 w-full">
                  <Label htmlFor="calendar" className="">
                    Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button name="calendar" variant="outline">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      ></Calendar>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-full">
                  <TimePicker date={date} setDate={setDate}></TimePicker>
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="warrant">Warrant</Label>
                <Input id="warrant" type="file" />
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="w-full"
                    onClick={() => setEnquireFetch(true)}
                  >
                    Search Vehicles
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Nearby Vehicles</DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Vehicle Number</TableHead>
                          <TableHead>Location</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>KA-01-MC-1234</TableCell>
                          <TableCell>12.9716° N, 77.5946° E</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>KA-01-MC-1235</TableCell>
                          <TableCell>12.9716° N, 77.5946° E</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
