import { Image } from "@heroui/image";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div>
          <Image 
            alt="German Shepherd sitting pose"
            height={536}
            src="https://sweng861-pds.s3.us-east-2.amazonaws.com/german-shepherd.png"
            width={720}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
