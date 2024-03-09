import { StatsProps } from '@/interfaces/interfaces'; 

const Stats = ({ name, stat = "0" }: StatsProps) => {
    
    if (!name) return null;

    const capitalize = (s: string) => { 
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
  return (
      <div className='text-center border p-7 rounded-md'>
          <h3 className='font-semibold text-lg'>{capitalize(name)} Tasks</h3>
          <p className='font-semibold'>{ stat }</p>
    </div>
  )
}

export default Stats