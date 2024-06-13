"use client"
import Header from '@/components/Home-page/Header';
import AboutUs from '@/components/Home-page/AboutUs';
import ContactUs from '@/components/Home-page/ContactUs';
import Footer from '@/components/Home-page/Footer';

const IndexPage = () => {
    return (
        <div>
            <div>
                <Header title="Welcome to My Store" />
            </div>
            <AboutUs />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default IndexPage;
