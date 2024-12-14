import React from "react";
import PhotoDialog from "./Photo-dialog";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return (
    <PhotoDialog>
      <div>{id}</div>
    </PhotoDialog>
  );
};

export default page;
