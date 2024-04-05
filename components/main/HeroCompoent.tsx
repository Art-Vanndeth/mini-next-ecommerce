
import { Card } from "flowbite-react";

export default function HeroComponent() {
  return (
    <section className="flex place-content-center m-16">
      <div className="flex space-x-24 md:flex-wrap sm:flex-wrap flex-wrap sm:flex-col md:flex-row">
        <Card href="#" className="max-w-md border-none shadow-none">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Finance
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        <Card href="#" className="max-w-md border-none shadow-none">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Enterprise Design
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        <Card href="#" className="max-w-md border-none shadow-none">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Operations
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </section>
  );
}
