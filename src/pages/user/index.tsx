import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { getUser } from "@/hooks/getUser";

export default function User() {
  const [user, setUser] = useState<any>(null);                                                          
                                                                                                                                            
  useEffect(() => {
    getUser().then((res) => setUser(res));                                                                                            
20    }, []); 
  
  return (
    <div className="min-h-screen p-12">
      <div className="flex flex-col justify-center items-center text-center text-gray-100 text-xl gap-3 p-3">
        <div className="text-3xl font-bold">Details</div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2 ">
            <div className="">Name: </div>
            <div className="">{user?.Name}</div>
          </div>
          <div className="flex gap-2 ">
            <div className="">Phone Number: </div>
            <div className="">{user?.Phone}</div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="text-black">
        <Table className="bg-white rounded-lg mt-6 text-left">
          <TableHeader className="">
            <TableRow>
              <TableHead className="">ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user?.bills?.map((bill: any, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell>{bill.id}</TableCell>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell className="">{bill.amount}</TableCell>
                  <TableCell className="text-right w-1/5">
                    <Button>Rise Query</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
