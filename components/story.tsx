import Image from "next/image";

export default function Story() {
  return (
    <section className="relative">
      {/* Blurred shape */}
      <div
        className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs4-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fillRule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          ></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                Douglas's story (so far)
              </h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image
                  className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]"
                  src="/images/team.jpeg"
                  width={420}
                  height={280}
                  alt="Team"
                />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    I am a programmer who values personal development, building
                    my foundation from the most basic knowledge. When I realized
                    that not all knowledge directly enhances my development
                    efficiency, I was not discouraged. I believe that seemingly
                    fundamental knowledge, such as discrete mathematics, data
                    structures, and understanding the principles of operating
                    systems and coding processes, will propel me further in the
                    future. I am grateful for the fellow nerds I studied with
                    while drifting through Brisbane. We are all still growing,
                    aren't we? Together, we strive for a future with better
                    technology for humanity.
                  </p>
                  <p>
                    There were nights when I sat in front of my computer,
                    pondering over AI training programs, thinking about how to
                    improve the outcomes. Even now, I find myself late at night
                    contemplating ways to enhance the components and programs I
                    work on.{" "}
                    <strong className="text-slate-50 font-medium">
                      When it comes to programming, be it architecture or logic,
                      I don't believe in the concept of best practices. I
                      believe that with time, there are always better practices
                      to be found.{" "}
                    </strong>
                  </p>
                  <p>
                    Just like during my days at{" "}
                    <a
                      className="text-purple-500 font-medium hover:underline"
                      href="https://www.uq.edu.au/"
                    >
                      the University of Queensland
                    </a>
                    , where even the programs that seemed to have the correct
                    answers always had room for improvement. I am willing to
                    dedicate more sweat and effort for those seemingly minor
                    enhancements, believing they make a significant difference.
                  </p>
                  <p>
                    I now believe that my knowledge, abilities, and experience
                    equip me to thrive in this industry. I am diligently working
                    towards this goal, continuously absorbing more knowledge and
                    refining my tech stack. From handling dozens of HTML files
                    and hundreds of Python programs, to now managing hundreds of
                    React files and numerous Express and Nest projects, I take
                    pride in my progress.{" "}
                    <strong className="text-slate-50 font-medium">
                      But I will go even further, as I have not stopped and will
                      never stop.{" "}
                    </strong>
                    Coding has become an integral part of my life, and I am
                    passionate about it. My goal is to become the best technical
                    expert I can be.
                  </p>
                  <p>
                    At this moment, I would like to extend my sincere gratitude
                    to my like-minded friends on this technical journey, to the
                    mentors who have helped me, and to the countless instructors
                    who have imparted their invaluable knowledge. Thank you all!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
