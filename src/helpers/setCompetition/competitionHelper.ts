// helper.ts
import { format, toZonedTime } from 'date-fns-tz';
import { addHours, format as formatDate } from 'date-fns';

// Get the UTC time for the competition based on IST
export const getCompetitionTimeUTC = (day: number, hour: number, minute: number): Date => {
  const now = new Date();
  const competitionTimeInIST = new Date(now);
  // competitionTimeInIST.setUTCDate(competitionTimeInIST.getUTCDate() + ((7 + day - competitionTimeInIST.getUTCDay()) % 7));
  competitionTimeInIST.setUTCHours(hour);
  competitionTimeInIST.setUTCMinutes(minute);
  competitionTimeInIST.setUTCSeconds(0);
  competitionTimeInIST.setUTCMilliseconds(0);

  const istOffset = 5.5; // IST offset is +5:30 from UTC
  return addHours(competitionTimeInIST, -istOffset);
};

// Format date in a specific time zone
export const formatDateInTimeZone = (date: Date, timeZone: string, dateFormat: string): string => {
  const zonedDate = toZonedTime(date, timeZone);
  return format(zonedDate, dateFormat, { timeZone });
};
