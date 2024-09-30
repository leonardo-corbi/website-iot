"use client";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-center">
          &copy; 2024 Leonardo Corbi. Todos direitos reservados.
        </p>
      </div>
    </footer>
  );
}
