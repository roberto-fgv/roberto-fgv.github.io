import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Roberto dos Santos Rocha</h1>
          <p className="text-lg text-gray-700">Researcher | Educator | Information Systems Specialist</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" asChild>
              <a href="mailto:rsantos.rocha@gmail.com"><Mail className="mr-2" /> Email</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/rsrocha" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Dedicated researcher and educator with extensive experience in Information Systems, agile methodologies,
            and higher education. Skilled in both qualitative and quantitative research, with international experience as a Marie Curie Fellow. Strong background in managing accreditation processes and leveraging programming skills for data analysis.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Doctorate in Business Administration (Information Systems)</strong> - FGV EAESP (2022 - 2026)</li>
                <li><strong>Master’s in Information Systems</strong> - USP (2010 - 2012)</li>
                <li><strong>Specialization in IS Administration</strong> - UFLA (2007 - 2009)</li>
                <li><strong>Bachelor’s in Business Administration</strong> - FTC (2002 - 2006)</li>
                <li><strong>Technical Degree in Informatics</strong> - IFBA (2000 - 2001)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Quantitative & Qualitative Research</li>
                <li>Agile Methodologies</li>
                <li>Programming: R, Python, HTML, JavaScript</li>
                <li>Tools: NVivo, Git, GitHub</li>
                <li>Accreditation Processes (AMBA, CEMS, CAPES)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ul className="text-gray-700 space-y-4">
            <li>
              <strong>Teaching Assistant</strong> - FGV EAESP (2022 - Present)
              <p>Support for Executive MBA and MPGI programs. Courses include Customer Success Management, CEMS Business Project, and Research Methodology.</p>
            </li>
            <li>
              <strong>Tutor Professor</strong> - UFBA (2021 - 2022)
              <p>Student support in distance learning, grading, and content production.</p>
            </li>
            <li>
              <strong>Administrative Technician</strong> - UFBA (2006 - 2022)
              <p>Administrative and academic support, report preparation, public service.</p>
            </li>
            <li>
              <strong>First Stage Researcher (Marie Curie Fellow)</strong> - European Research Center (2016)
              <p>Participated in the NITIM ESR project under MSCA, focusing on Information Systems research.</p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Awards & Certifications</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Marie Skłodowska-Curie Actions (MSCA) Fellowship</li>
            <li>Microsoft Azure for Research Grant</li>
            <li>Necessary Condition Analysis (NCA)</li>
            <li>Case Writing and Teaching in Management</li>
            <li>Psychometrics and Latent Variable Analysis</li>
            <li>Git and GitHub</li>
          </ul>
        </section>

        <footer className="text-center text-gray-600 mt-12">
          © 2025 Roberto dos Santos Rocha
        </footer>
      </div>
    </div>
  );
}
