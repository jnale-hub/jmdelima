import Image from 'next/image';

type TProps = {
  company: string;
  position: string;
  duration: string;
  description: string;
  logo: string;
};

export default function ExperienceCard({
  company,
  position,
  duration,
  description,
  logo,
}: TProps) {
  return (
    <div className="pl-0 lg:pl-2 p-2 mb-4 last:mb-0">
      <div className="flex items-center gap-2 mb-2 justify-between">
        <Image src={logo} alt={company} width={32} height={32} />
        <div className="mr-auto">
          <h2 className="text-slate-100 text-sm font-bold">{company}</h2>
          <h3 className="text-slate-200 text-sm font-medium">{position}</h3>
        </div>
        <p className="text-slate-400 text-[11px] lg:text-xs leading-none">
          {duration}
        </p>
      </div>
      <ul className="text-slate-350 text-xs mt-4 lg:text-sm lg:mt-6 list-disc text-pretty lg:pl-6 pl-4">
        {description.split('\n').map((item, index) => (
          <li key={index} className="mb-2 pl-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
