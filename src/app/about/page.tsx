import Image from "next/image"

export const metadata = {
  title: "WebEtu - About",
}

const AboutPage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 p-8 pt-20 sm:pt-8">
      <div className="max-w-7xl w-full bg-white shadow-xl rounded-2xl p-12 text-gray-800 font-sans grid grid-cols-1 sm:grid-cols-2 gap-12 h-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            priority={true}
            src="/images/logo-black.svg"
            alt="OSCA Club Logo"
            width={170}
            height={170}
            className="mb-12 rounded-full shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            مرحبًا بكم في WebEtu
          </h1>
          <p className="text-2xl text-gray-600 font-semibold">
            جامعة باجي مختار
          </p>
          <div className="mt-8 flex gap-6 justify-center sm:justify-start">
            <a
              href="https://t.me/OSCommunityChat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-400 transition"
            >
              <i className="fab fa-telegram-plane text-5xl"></i>
            </a>
            <a
              href="https://github.com/OSCAnnaba/WebEtu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition"
            >
              <i className="fab fa-github text-5xl"></i>
            </a>
          </div>
          <h2 className="text-2xl font-semibold text-sky-700 mt-12">
            فريق العمل
          </h2>
          <ul className="list-inside space-y-3 text-lg mt-4 pl-0">
            <li>قصاص أحمد عبد النور</li>
            <li>شدادي خليل عبد الرحمان</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 text-right">
          <Section title="من نحن؟" titleColor="text-green-700">
            <p>
              نحن نادي علمي يضم مجموعة من طلاب الإعلام الآلي بجامعة باجي مختار،
              نسعى لتعزيز التعاون وتبادل المعرفة في مجال البرمجيات الحرة
            </p>
          </Section>

          <Section title="ما هو هذا الموقع؟" titleColor="text-green-700">
            <p>
              هذا الموقع هو نسخة ويب بديلة غير رسمية من تطبيق{" "}
              <a
                href="https://play.google.com/store/apps/details?id=app.progres.webetu&hl=en"
                className="font-bold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WebEtu
              </a>
            </p>
          </Section>

          <Section title="ما سبب تطوير هذا الموقع؟" titleColor="text-green-700">
            <p className="text-lg text-gray-700 font-medium">
              هناك سببان رئيسيان يتمثلان في:
            </p>
            <List
              items={[
                "دعم مختلف المنصات الإلكترونية سواء أجهزة حاسوب أو الهواتف أو أي جهاز رقمي أخر به متصفح",
                "بعض المشاكل التقنية الموجودة في التطبيق الرسمي الخاص بوزارة التعليم العالي والبحث العلمي",
              ]}
            />
          </Section>
        </div>
      </div>
    </div>
  )
}

const Section = ({ title, children, titleColor }: any) => {
  return (
    <div className="p-6 rounded-lg bg-gray-50 shadow-md border border-gray-200">
      <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>{title}</h2>
      <div className="text-gray-700 text-lg">{children}</div>
    </div>
  )
}

const List = ({ items }: { items: string[] }) => {
  return (
    <ul className="list-inside space-y-3 rtl text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default AboutPage
