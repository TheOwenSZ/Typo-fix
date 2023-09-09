import { Tab } from "@headlessui/react";
import { Fragment, type FC } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface CarouselItem {
  name: string;
  image: string;
  description: string;
}

const Carousel: FC<{ views: CarouselItem[] }> = (props) => {
  const panels = props?.views?.map(({ description, image }) => (
    <Tab.Panel>
      <img src={image} alt={description} className="h-96" />
    </Tab.Panel>
  ));
  const tabs = props?.views?.map(({ name }) => (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={classNames(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
            selected ? "bg-neutral-700 shadow" : "hover:bg-white/[0.12]"
          )}
        >
          {name}
        </button>
      )}
    </Tab>
  ));

  return (
    <Tab.Group>
      <Tab.Panels>{panels}</Tab.Panels>
      <Tab.List className="flex flex-row gap-6 justify-center bg-neutral-800 rounded-lg">
        {tabs}
      </Tab.List>
    </Tab.Group>
  );
};

export default Carousel;
