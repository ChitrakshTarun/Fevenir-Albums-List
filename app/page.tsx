import AlbumList from "@/components/AlbumList";

const IndexPage = async () => {
  return (
    <div className="flex flex-1 flex-col m-4 lg:m-8">
      <AlbumList layout="list" />
    </div>
  );
};

export default IndexPage;
