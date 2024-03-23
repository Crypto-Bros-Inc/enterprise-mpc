import { Button, notification } from "antd";
import Table, { ColumnProps } from "antd/es/table";
import { useEffect, useState } from "react";
import { iwallet_backend } from "../../../../declarations/iwallet_backend";

type User = {
  name: string;
  email: string;
  publicKey: string;
};

const columns: ColumnProps<User>[] = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "PUBLIC KEY",
    dataIndex: "publicKey",
    key: "publicKey",
  },
];

const Dashboard = () => {
  const [dataSource, setDataSource] = useState<User[]>([]);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    fetchWallets();
  }, []);

  const fetchWallets = async () => {
    try {
      const response = await iwallet_backend.getAll();

      if (response) {
        console.log("response", response);
        setDataSource(response);
      } else {
        api.error({
          message: "Failed to fetch collections",
          description: "Please try again later.",
          placement: "bottom",
        });
      }
    } catch (error) {
      api.error({
        message: "Error fetching collections",
        description: "Please try again later.",
        placement: "bottom",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-left p-16">
      <h1 className="text-3xl font-bold">Wallets</h1>
      <div className="flex flex-row justify-between">
        <p className="text-lg">
          Create and view custodial wallets for your users.
        </p>
        <Button type="primary" className="mt-4">
          New wallet
        </Button>
      </div>
      <Table rowKey={"email"} dataSource={dataSource} columns={columns} />
    </main>
  );
};

export default Dashboard;