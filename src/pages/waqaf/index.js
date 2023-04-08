import MarginLayout from "@/components/marginLayout";
import NavbarLayout from "@/components/navbar/NavbarLayout";
import styles from "../../styles/Home.module.css";
import HeaderComponent from "@/components/header/HeaderComponent";
const Waqaf = () => {
  return (
    <>
      <div className={styles.bg}>
        <MarginLayout>
          <HeaderComponent />
          <NavbarLayout>
            <div className="flex justify-center items-center h-[90vh]">
              <p>coming soon</p>
            </div>
          </NavbarLayout>
        </MarginLayout>
      </div>
    </>
  );
};

export default Waqaf;
