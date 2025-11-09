import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import PortfolioGallery from '../components/PortfolioGallery';
import Contact from '../components/Contact';
import GoogleMaps from '../components/GoogleMaps';
import Footer from '../components/Footer';

export default function Home({ data }) {
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={data.meta.title} />
        <meta property="og:description" content={data.meta.description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar companyName={data.companyName} />
      <HeroSection heroData={data.hero} />
      <AboutUs companyName={data.companyName} />
      <Services services={data.services} />
      <PortfolioGallery portfolio={data.portfolio} />
      <Contact contactData={data.contact} />
      {data.googleMaps && (
        <GoogleMaps googleMapsData={data.googleMaps} address={data.contact.address} />
      )}
      <Footer companyName={data.companyName} contactData={data.contact} />
    </>
  );
}

export async function getStaticProps() {
  // TODO: Replace this placeholder with your actual public Google Drive file URL
  // Format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
  const GOOGLE_DRIVE_URL = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE';

  let data = null;

  try {
    // Try to fetch from Google Drive first
    const response = await fetch(GOOGLE_DRIVE_URL);
    
    if (response.ok) {
      data = await response.json();
    } else {
      throw new Error('Failed to fetch from Google Drive');
    }
  } catch (error) {
    // Fallback to local data.json if Google Drive fetch fails
    console.warn('Failed to fetch from Google Drive, using local fallback:', error.message);
    
    try {
      const fs = require('fs');
      const path = require('path');
      const filePath = path.join(process.cwd(), 'public', 'data.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileContents);
    } catch (localError) {
      console.error('Failed to load local data.json:', localError.message);
      // Return a minimal data structure to prevent build failure
      data = {
        companyName: 'Rudra Enterprises',
        meta: {
          title: 'Rudra Enterprises',
          description: 'Custom Furniture & Fabrication in Ponda, Goa',
          keywords: 'Rudra Enterprises'
        },
        hero: {
          title: 'Welcome',
          subtitle: 'Your trusted partner',
          cta: 'Contact Us'
        },
        contact: {
          primaryName: 'Contact',
          phones: [],
          email: '',
          address: '',
          whatsapp: '',
          social: {}
        },
        services: [],
        portfolio: []
      };
    }
  }

  return {
    props: {
      data,
    },
  };
}

