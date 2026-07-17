import { HatsOptionCategoryPage } from "../HatsOptionCategoryPage";
import { closureOptions } from "../options-data";

export default function HatClosurePage() {
  return (
    <HatsOptionCategoryPage
      eyebrow="Closure"
      title="Choose your closure"
      description="The back closure changes the feel more than people think. Start here if you want the hat to lean more relaxed, more technical, or more structured."
      cards={closureOptions}
    />
  );
}
