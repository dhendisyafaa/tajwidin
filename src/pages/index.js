import SectionCategory from "@/components/SectionCategory";
import CardTajwid from "@/components/cards/CardTajwid";
import CarouselHome from "@/components/carousel/CarouselHome";
import MarginLayout from "@/components/marginLayout";
import NavbarLayout from "@/components/navbar/NavbarLayout";
import styles from "../styles/Home.module.css";
import HeaderComponent from "@/components/header/HeaderComponent";
export default function Home() {
  return (
    <>
      <div className={styles.bg}>
        <MarginLayout>
          <HeaderComponent />
          <NavbarLayout>
            <CarouselHome />
            <div>
              <p className="text-center font-semibold text-lg mt-8">
                Kategori berdasarkan hukum
              </p>
              <SectionCategory />
            </div>
            <div>
              <p className="font-semibold text-lg my-5">
                Kategori berdasarkan hukum
              </p>
              <div className="flex flex-col lg:grid lg:grid-cols-4  gap-1">
                <CardTajwid />
                <CardTajwid />
                <CardTajwid />
                <CardTajwid />
                <CardTajwid />
                <CardTajwid />
              </div>
            </div>
          </NavbarLayout>
        </MarginLayout>
      </div>
    </>
  );
}
