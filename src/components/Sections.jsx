import { BookOpen, Award, FlaskConical, Layers, Mail, Image as ImageIcon, FileText } from 'lucide-react';

function Section({ id, icon: Icon, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20 border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-md bg-neutral-900 text-white p-2">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">{title}</h2>
            {subtitle && (
              <p className="mt-1 text-neutral-600 text-sm sm:text-base">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <Section
      id="about"
      icon={BookOpen}
      title="About"
      subtitle="Formal profile photo and concise academic summary."
    >
      <div className="lg:col-span-1">
        <div className="aspect-[3/4] w-full rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-500">
          <ImageIcon className="h-8 w-8" />
        </div>
        <p className="mt-3 text-xs text-neutral-500">Space for a formal profile photo (3:4).</p>
      </div>
      <div className="lg:col-span-2">
        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-700 leading-relaxed">
            Introduce Farah Najwa, her motivation to pursue psychology, areas of interest (e.g., cognition, development), and relevant strengths such as critical thinking, empathy, and research curiosity.
          </p>
          <ul className="mt-4 list-disc pl-5 text-neutral-700">
            <li>Academic focus and goals</li>
            <li>Key experiences that sparked interest</li>
            <li>Ethical, evidence-based perspective</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section
      id="education"
      icon={Award}
      title="Education"
      subtitle="Schools, qualifications, awards, and certificates."
    >
      <Card title="Secondary Education" caption="Institution, years, subjects, notable results.">
        <AttachmentPlaceholders />
      </Card>
      <Card title="Awards & Distinctions" caption="Scholarships, academic prizes, competitions.">
        <AttachmentPlaceholders />
      </Card>
      <Card title="Certificates" caption="Upload links to PDF certificates or scanned documents.">
        <AttachmentPlaceholders />
      </Card>
    </Section>
  );
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      icon={FlaskConical}
      title="Projects"
      subtitle="Research abstracts, roles, methods, and outcomes."
    >
      <Card title="Independent Study" caption="Abstract, methodology, instruments, results summary.">
        <LinkPlaceholder />
      </Card>
      <Card title="Collaborative Project" caption="Team, responsibilities, data collection, analysis tools.">
        <LinkPlaceholder />
      </Card>
      <Card title="Poster/Presentation" caption="Conference or school fair; include link to poster or slides.">
        <LinkPlaceholder />
      </Card>
    </Section>
  );
}

export function SkillsSection() {
  return (
    <Section
      id="skills"
      icon={Layers}
      title="Skills"
      subtitle="Research methods, analysis, communication, and tools."
    >
      <div className="lg:col-span-2">
        <div className="grid sm:grid-cols-2 gap-4">
          <TagGroup title="Research & Methods" tags={["Literature review", "Experimental design", "Ethics & consent", "Survey design"]} />
          <TagGroup title="Data & Analysis" tags={["SPSS", "JASP", "Excel", "Qualitative coding"]} />
          <TagGroup title="Communication" tags={["Academic writing", "Presentations", "Facilitation", "Report structuring"]} />
          <TagGroup title="Soft Skills" tags={["Empathy", "Attention to detail", "Teamwork", "Time management"]} />
        </div>
      </div>
      <div className="lg:col-span-1">
        <Card title="Languages" caption="Proficiency levels">
          <ul className="space-y-2 text-neutral-700">
            <li>English — Advanced</li>
            <li>Bahasa Melayu — Native</li>
            <li>Arabic — Intermediate</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section
      id="contact"
      icon={Mail}
      title="Contact"
      subtitle="Professional channels for outreach."
    >
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
        <Field label="Email" value="farah.najwa@example.com" />
        <Field label="Phone" value="(+60) 12 345 6789" />
        <Field label="Location" value="Kuala Lumpur, Malaysia" />
        <Field label="LinkedIn" value="linkedin.com/in/farah-najwa" />
      </div>
      <div className="lg:col-span-1" id="cv">
        <Card title="Curriculum Vitae" caption="Provide a downloadable PDF.">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800"
            download
          >
            <FileText className="h-4 w-4" /> Download CV
          </a>
          <p className="mt-2 text-xs text-neutral-500">Replace with a direct link to your CV file.</p>
        </Card>
      </div>
    </Section>
  );
}

function Card({ title, caption, children }) {
  return (
    <div className="rounded-lg border border-neutral-200 p-5 bg-white">
      <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
      {caption && <p className="mt-1 text-sm text-neutral-600">{caption}</p>}
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function AttachmentPlaceholders() {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="aspect-video rounded-md border border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center text-neutral-500">
          <ImageIcon className="h-5 w-5" />
        </div>
      ))}
      <div className="col-span-full text-xs text-neutral-500">Placeholders for images/certificates. Replace with uploads or links.</div>
    </div>
  );
}

function LinkPlaceholder() {
  return (
    <a href="#" className="inline-flex items-center gap-2 text-neutral-900 hover:underline">
      Add link to paper, dataset, or repo
    </a>
  );
}

function TagGroup({ title, tags }) {
  return (
    <div className="rounded-lg border border-neutral-200 p-4">
      <p className="text-sm font-medium text-neutral-900">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-800 text-xs px-3 py-1">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className="rounded-lg border border-neutral-200 p-4 bg-white">
      <p className="text-xs uppercase tracking-wide text-neutral-500">{label}</p>
      <div className="mt-1 text-neutral-900 text-sm break-all">{value}</div>
    </div>
  );
}
