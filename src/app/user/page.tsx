"use client";

import Image from "next/image";
import { useGetUser } from "@/hooks/useUser";
import { IUser } from "@/interfaces/user.interface";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export default function UsersPage() {
  const getUser = useGetUser();
  const data = getUser.data as IUser;

  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <div className="flex-col flex items-center">
        <Image
          src={data?.picture?.large || ""}
          alt="User"
          width={200}
          height={200}
          className="mb-4"
        />
        <div className="text-blue-600 text-xl">{data?.email}</div>
        <div className="text-2xl">
          {data?.name?.first} {data?.name?.last}
        </div>
        {data?.dob?.date && (
          <div>
            {format(new Date(data?.dob?.date), "MMM dd yyyy", { locale: enUS })}
          </div>
        )}
        <div>{data?.cell}</div>
      </div>
    </div>
  );
}
