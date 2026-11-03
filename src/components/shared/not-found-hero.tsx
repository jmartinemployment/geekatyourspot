import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

/**
 * The 404 hero, built on the same grid as SharedHeroSection: the breadcrumb as the first row
 * spanning every column, then the heading. A missing page has no levels of its own to name, so
 * the trail is Home alone. Both not-found files render this, so the two cannot drift apart.
 */
const summary =
  "The page you asked for does not exist. It may have moved, or the address may have a typo.";

function Trail() {
  return (
    <div className="col-span-full w-full self-start pt-4">
      <Breadcrumb>
        <BreadcrumbList className="text-xs font-normal text-white">
          <BreadcrumbItem>
            <BreadcrumbLink
              className="font-normal text-white no-underline hover:text-[#C83803]"
              render={<Link href="/" />}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function Links() {
  return (
    <div className="pt-6">
      <Link href="/" className="btn btn-primary">
        Go to the Home Page
      </Link>
    </div>
  );
}

export default function NotFoundHero() {
  return (
    <>
      <header className="min-h-screen bg-[#0B162A] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr] place-items-center">
            <Trail />
            <div className="col-span-full">
              <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                Page Not Found
              </h1>
              <p className="pt-3 text-xl text-white shadow-text">{summary}</p>
              <Links />
            </div>
          </div>
        </div>
      </header>

      <header className="hidden min-h-screen bg-[#0B162A] lg:block">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 grid-rows-[auto_1fr] place-items-center gap-x-4">
            <Trail />
            <div className="col-span-7">
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                Page Not Found
              </h1>
              <p className="pt-3 text-2xl text-white shadow-text">{summary}</p>
              <Links />
            </div>
            <div className="col-span-5 flex min-h-screen flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faCompass}
                className="text-[#C83803]"
                style={{ width: "16rem", height: "16rem" }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
