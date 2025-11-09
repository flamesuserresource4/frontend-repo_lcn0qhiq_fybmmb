export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 text-center sm:text-left">
          © {new Date().getFullYear()} Farah Najwa — Psychology Applicant
        </p>
        <p className="text-sm text-neutral-600">Professional portfolio for university applications</p>
      </div>
    </footer>
  );
}
