/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import ImageWithLoader from "@/components/globals/ImageWithLoader";
import VideoWithLoader from "@/components/globals/VideoWithLoader";
import ProjectNavigation from "@/components/work/ProjectNavigation";

const BeFirst = () => {
  return (
    <>
      <Header />
      <div
        id="BeFirst"
        className="bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark"
      >
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl mt-16 font-bold mb-4">
            Advent Delights: Digital Heritage Exhibition
          </h1>
          <p className="text-lg">
            Welcome to 'Advent Delights', a digital heritage exhibition project
            celebrating Barking's rich history. This project, funded by The
            National Lottery Heritage Fund and managed by Be First, aims to
            create a digital version of our physical heritage exhibition. This
            page demonstrates the work I've done on this project, including the
            technology stack used and key features implemented.
            <a
              href="https://yourcall.befirst.london/our-barking-digital-heritage-exhibition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
              aria-label="Visit the Barking Heritage Project website to learn more about the digital exhibition"
            >
              <span> Learn more about the Barking Heritage Project</span>
            </a>
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
              <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
              <p>
                The 'Advent Delights' project involved creating 24 one-minute
                videos, each highlighting an item or theme from the heritage
                exhibition. These videos were shared daily on social media
                throughout December, culminating in a full 24-minute film
                embedded on the project webpage.
              </p>
            </section>

            <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
              <h2 className="text-2xl font-semibold mb-2">
                Technology and Skills
              </h2>
              <ul className="list-disc pl-5">
                <li>Adobe Premiere Pro for video editing</li>
                <li>Adobe After Effects for animations</li>
                <li>Audio editing software for sound quality enhancement</li>
                <li>Subtitling and captioning tools</li>
                <li>Team collaboration and communication tools</li>
              </ul>
            </section>

            <section className="h-full pr-8 pt-8 row-start-3 max-2xl:row-start-1 max-2xl:col-end-3 max-lg:row-start-3 max-lg:col-start-1 border-b border-gray-100 border-opacity-10 max-lg:pb-8 max-2xl:pt-8">
              <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc pl-5">
                <li>Production of 24 one-minute heritage videos</li>
                <li>Daily video releases on social media during December</li>
                <li>
                  Final compilation of a 24-minute film for the project webpage
                </li>
                <li>High-quality video and audio editing with subtitles</li>
                <li>Integration of logos and weblinks in video content</li>
                <li>
                  Collaboration with volunteers for voice-overs and content
                  creation
                </li>
              </ul>
            </section>

            <section className="border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0">
              <a
                href="https://yourcall.befirst.london/our-barking-digital-heritage-exhibition"
                className="filter hover:brightness-75 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video">
                  <VideoWithLoader
                    title="Advent Delights Project"
                    src="/videos/beFirst.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    width={960}
                    height={480}
                    className="w-full rounded-lg"
                  />
                </div>
              </a>
            </section>
          </div>
          <div className="grid grid-cols-6 grid-rows-2 mt-8 max-lg:grid-cols-1">
            <section className="row-span-full col-span-3 col-start-1 max-lg:row-start-3 max-lg:row-span-1 pt-8 border-r border-gray-100 border-opacity-10 bg-gray-100 bg-opacity-20 max-2xl:col-span-3">
              <h2 className="text-2xl font-semibold mb-2 ml-4">
                Video Releases
              </h2>
              <div className="p-4">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Day</th>
                      <th className="px-4 py-2">Exhibition Treat</th>
                      <th className="px-4 py-2">Talking</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">
                        River Roding - board/banner
                      </td>
                      <td className="border px-4 py-2">G or Eric</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2</td>
                      <td className="border px-4 py-2">
                        Windmill - picture/postcard
                      </td>
                      <td className="border px-4 py-2">Felicity</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">
                        Abbey - board, model, objects
                      </td>
                      <td className="border px-4 py-2">Alex</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">4</td>
                      <td className="border px-4 py-2">
                        St Margaret's Church, model, board
                      </td>
                      <td className="border px-4 py-2">Alex</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">5</td>
                      <td className="border px-4 py-2">
                        Curfew Tower- model, board
                      </td>
                      <td className="border px-4 py-2">SP</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">
                        Back Lane/Axe St/Heath St - pics on board, model?
                      </td>
                      <td className="border px-4 py-2">SP/G/Eric</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">7</td>
                      <td className="border px-4 py-2">
                        Leet House /Markets - board, objects?
                      </td>
                      <td className="border px-4 py-2">Sue/Sp</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">8</td>
                      <td className="border px-4 py-2">
                        Broadway/theatres - board, objects?
                      </td>
                      <td className="border px-4 py-2">Sue/Sp</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">9</td>
                      <td className="border px-4 py-2">
                        Three Lamps/protest - board?
                      </td>
                      <td className="border px-4 py-2">SP</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">10</td>
                      <td className="border px-4 py-2">
                        Trams/Bascule Bridge - transport board pics, objects
                      </td>
                      <td className="border px-4 py-2">Felicity</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">11</td>
                      <td className="border px-4 py-2">
                        Fawley House/fishing - River/objects
                      </td>
                      <td className="border px-4 py-2">Lesley</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">12</td>
                      <td className="border px-4 py-2">
                        Barking Quay/Hewetts Quay? - River/transport, objects?
                      </td>
                      <td className="border px-4 py-2">Eric/G</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">13</td>
                      <td className="border px-4 py-2">
                        Jute works - River board, objects, jute, clogs, shawl
                        etc
                      </td>
                      <td className="border px-4 py-2">Felicity & Alex</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">14</td>
                      <td className="border px-4 py-2">
                        Match Factory - objects
                      </td>
                      <td className="border px-4 py-2">G</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">15</td>
                      <td className="border px-4 py-2">
                        Bifrons/Vans/R whites - bottle, pics
                      </td>
                      <td className="border px-4 py-2">Alex</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">16</td>
                      <td className="border px-4 py-2">
                        Grand Homes - board, Cecil House?
                      </td>
                      <td className="border px-4 py-2">Lesley</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">17</td>
                      <td className="border px-4 py-2">
                        Dawson's Public offices/fire station/pool/park?
                      </td>
                      <td className="border px-4 py-2">Alex?</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">18</td>
                      <td className="border px-4 py-2">
                        Burton building - board, objects
                      </td>
                      <td className="border px-4 py-2">SP</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">19</td>
                      <td className="border px-4 py-2">
                        North Street - board/Workhouse
                      </td>
                      <td className="border px-4 py-2">Lesley</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">20</td>
                      <td className="border px-4 py-2">
                        Ripple Rd/Blake's corner - board, objects
                      </td>
                      <td className="border px-4 py-2">Eric</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">21</td>
                      <td className="border px-4 py-2">
                        Station/Station parade - transport board, objects
                      </td>
                      <td className="border px-4 py-2">F or G</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">22</td>
                      <td className="border px-4 py-2">
                        Central Hall/Wesleyan chapel/cinema?
                      </td>
                      <td className="border px-4 py-2">Eric?</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">23</td>
                      <td className="border px-4 py-2">
                        East Street - board objects
                      </td>
                      <td className="border px-4 py-2">George</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">24</td>
                      <td className="border px-4 py-2">
                        Worrickers sign, receipt, toys
                      </td>
                      <td className="border px-4 py-2">George</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="p-8 max-lg:px-0 col-span-2 col-start-4 row-span-full max-2xl:col-span-3">
              <h2 className="text-2xl font-semibold mb-2">Deployment</h2>
              <p className="pb-8 border-b border-gray-100 border-opacity-10">
                This project involved deploying the videos on various social
                media platforms to reach the local community and heritage
                enthusiasts. The final compilation was embedded on the project's
                official webpage.
              </p>
              <h2 className="text-2xl font-semibold mb-2 pt-8">
                Technical Details
              </h2>
              <p className="pb-8 border-b border-gray-100 border-opacity-10">
                The project required extensive use of video editing software for
                creating high-quality videos, audio editing for clear and
                engaging narration, and animation tools for adding dynamic
                elements to the videos. Subtitles and captions were added to
                ensure accessibility.
              </p>
              <h2 className="text-2xl font-semibold mb-4 mt-8">Client</h2>
              <div className="team-member mb-8">
                <div className="flex items-center">
                  <div>
                    <h3 className="text-xl font-semibold">BeFirst</h3>
                    <p className="text-gray-500 w-full mt-2"></p>
                  </div>
                </div>
              </div>
              <div className="flex row h-16 flex-wrap">
                <ImageWithLoader
                  src="/images/icons/premiere-pro.webp"
                  alt="Adobe Premiere Pro"
                  width={50}
                  height={50}
                  className="my-2 py-2"
                />
                <ImageWithLoader
                  src="/images/icons/photoshop.webp"
                  alt="Adobe Photoshop"
                  width={50}
                  height={50}
                  className="ml-2 my-2 py-2"
                />
              </div>
            </div>
          </div>
          <ProjectNavigation currentSlug="beFirst" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeFirst;
