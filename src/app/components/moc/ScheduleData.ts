import { styled } from "styled-components";

export interface IDataItem {
  name: string;
  timeStart: string;
  timeEnd: string;
  room: string;
  type: string;
  group?: string;
  teacherphoto?: string;
  teacherName?: string;
}
interface IDataDay {
  day: string;
  items: IDataItem[];
}
export interface IDataWeek {
  number: string;
  days: IDataDay[];
}
export interface IDataSchudle {
  id: number;
  number: string;
  week: IDataWeek[];
}

export const Icon = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  background-color: gray;
  border-radius: 100%;
`;

export const scheduleData: IDataSchudle[] = [
  {
    id: 0,
    number: "24101",
    week: [
      {
        number: "1",
        days: [
          {
            day: "Понедельник",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "9:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Математика",
                timeStart: "9:50",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "2",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Вторник",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "2",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "2",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "3",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Среда",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Четверг",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Пятница",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Суббота",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Воскресенье",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
        ],
      },
      {
        number: "2",
        days: [
          {
            day: "Понедельник",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Вторник",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Среда",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Четверг",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Пятница",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "2",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "3",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Суббота",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
          {
            day: "Воскресенье",
            items: [
              {
                name: "Математика",
                timeStart: "9:00",
                timeEnd: "10:00",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физика",
                timeStart: "10:20",
                timeEnd: "11:20",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
              {
                name: "Физкультура",
                timeStart: "11:40",
                timeEnd: "12:40",
                room: "309",
                type: "1",
                teacherphoto: "url: ......",
                teacherName: "Игорь Игорь Игорь",
              },
            ],
          },
        ],
      },
    ],
  },
];
