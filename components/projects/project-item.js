import Image from 'next/legacy/image';

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const youtube = data.properties.Youtube.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const tags = data.properties.Tags.multi_select;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };
  return (
    <div className='project-card'>
      <Image
        className='rounded-t-xl'
        src={imgSrc}
        alt='cover image'
        width='500%'
        height='430%'
      />
      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-bold'>{projectTitle}</h1>
        <h3 className='mt-4 text-xl'>{description}</h3>
        <a href={github}>깃허브 바로가기</a>
        <a href={youtube}>유튜브 시연영상 바로가기</a>
        <p className='my-1'>
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className='flex items-start mt-2'>
          {tags.map((aTag) => (
            <h1
              className='px-2 py-1 mr-2 rounded-me bg-sky-200 dark:bg-sky-700 w-30'
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
