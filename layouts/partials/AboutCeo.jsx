import ArrowButton from "@components/ArrowButton";
import ImageFallback from "@components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";

const AboutCeo = ({ aboutCeo }) => {
  const { enable, top_section, bottom_section } = aboutCeo.frontmatter;
  console.log("🪲 :", aboutCeo.frontmatter);
  return enable ? (
    <section className="bg-dark-secondary py-24">
      <div className="container flex flex-col gap-16 lg:gap-20">
        {top_section.enable && (
          <div className="flex flex-col-reverse md:flex-row max-md:gap-10 items-center">
            <div className="md:w-[50%]">
              <div className="flex flex-col gap-8">
                <div>
                  {markdownify(top_section.title, "h2", "mb-3 font-medium")}
                  {markdownify(top_section.description, "p", "text-light-tertiary text-base-sm")}
                </div>
                <div>
                  {markdownify(top_section.name, "p", "text-h4 mb-2")}
                  {markdownify(top_section.designation, "p", "")}
                  <div className="flex items-center gap-2 mt-4">
                    <ImageFallback
                      className="size-4"
                      width={16}
                      height={16}
                      src={"/images/icons/linkedin.svg"}
                      alt="linkedin"
                    />

                    {markdownify(top_section.linkedin, "span")}
                  </div>
                </div>
                {top_section.button.enable && (
                  <div>
                    <ArrowButton
                      link={top_section.button.link}
                      label={top_section.button.label}
                      className={"bg-secondary-600 text-dark-primary px-5 py-3 rounded-xl"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-[50%] md:pl-20">
              <ImageFallback
                src={top_section.image}
                alt={top_section.name}
                width={445}
                height={523}
                className="w-full rounded-xl drop-shadow-lg"
              />
            </div>
          </div>
        )}
        {bottom_section.enable && (
          <div className="flex flex-col-reverse md:flex-row-reverse max-md:gap-10  items-center">
            <div className="md:w-[50%] md:pl-20">
              <div className="flex flex-col gap-8">
                <div>
                  {markdownify(bottom_section.title, "h2", "mb-3 font-medium")}
                  {markdownify(bottom_section.description, "p", "text-light-tertiary text-base-sm")}
                </div>
                <div>
                  {markdownify(bottom_section.quote, "p", " mb-2 text-secondary-600")}
                  {markdownify(bottom_section.name, "p", "text-h5 mb-2")}
                </div>
                {bottom_section.button.enable && (
                  <div>
                    <ArrowButton
                      link={bottom_section.button.link}
                      label={bottom_section.button.label}
                      className={"bg-secondary-600 text-dark-primary px-5 py-3 rounded-xl"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-[50%]">
              <ImageFallback
                src={bottom_section.image}
                alt={bottom_section.name}
                width={445}
                height={523}
                className="w-full rounded-xl drop-shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  ) : null;
};

export default AboutCeo;
