import { NextPage } from 'next';

export const metadata = {
    title: 'Gupta Switchgear | Downloads',
    description: 'You can Download our Price List, Brochure, Catalog, etc. from here.',
    alternates: {
        canonical: "https://guptaswitchgears.com/downloads",
    },
    robots: {
        index: true, //
        follow: true,}
}

const DownloadPage: NextPage = () => {
    const pdfs = [
        { name: 'PCC LP No. 05 Dtd 2nd January 2025', url: '/files/PCC LP No. 05 Dtd 2nd January 2025.pdf' },
        { name: 'Panel Accessories Price List 01 May 2024', url: '/files/Panel Accessories Price List 01 May 2024.pdf' },
        { name: 'LDC LP No. 11 Dtd 20th November 2024', url: '/files/LDC LP No. 11 Dtd 20th November 2024.pdf' },
        { name: 'PV Solar Cable LP - 3rd Jul 2025', url: '/files/PV Solar Cable LP - 3rd Jul 2025.pdf' },
        { name: 'KEI Communication Cable LP - 3rd Jul 2025', url: '/files/KEI Communication Cable LP - 3rd Jul 2025.pdf' },
        { name: 'KEI LDC - 3C Flat List Price - 3rd Jul 2025', url: '/files/KEI LDC - 3C Flat List Price - 3rd Jul 2025.pdf' },
        { name: 'KEI LDC - MC Flx List Price - 3rd Jul 2025', url: '/files/KEI LDC - MC Flx List Price - 3rd Jul 2025.pdf' },
        { name: 'KEI LDC - SC Flx List Price - 3rd Jul 2025', url: '/files/KEI LDC - SC Flx List Price - 3rd Jul 2025.pdf' },
        { name: 'ESP Price List 01 May 2024_240501_002412', url: '/files/ESP Price List 01 May 2024_240501_002412.pdf' },
        { name: 'KEI- Cable List Price - Oct 2024', url: '/files/KEI- Cable List Price - Oct 2024.pdf' },
        { name: 'W&F List Price - 9th Oct 2024', url: '/files/W&F List Price - 9th Oct 2024.pdf' },
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold text-center mb-8">Download PDFs</h1>

            <table className="min-w-full table-auto border-collapse">
                <thead>
                <tr>
                    <th className="px-6 py-3 border-b border-gray-200">PDF Name</th>
                    <th className="px-6 py-3 border-b border-gray-200">Download</th>
                </tr>
                </thead>
                <tbody>
                {pdfs.map((pdf, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 border-b border-gray-200">{pdf.name}</td>
                        <td className="px-6 py-4 border-b border-gray-200">
                            <a
                                href={pdf.url}
                                download
                                className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Download
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DownloadPage;
