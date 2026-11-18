import React, { useState, useMemo } from 'react';
import './ArticlesGridSection.css';
import article1 from '../../assets/article1.webp';
import article2 from '../../assets/article2.webp';
import article3 from '../../assets/article3.webp';
import article4 from '../../assets/article4.webp';
import event1 from '../../assets/event1.webp';
import event2 from '../../assets/event2.webp';
import event3 from '../../assets/event3.webp';

const imgMap = {
  article1,
  article2,
  article3,
  article4,
  event1,
  event2,
  event3
};

const allStoriesData = [
  {
    "id": 1,
    "title": "The Places We Still Remember",
    "description": "From familiar classrooms to quiet corners of the campus, explore the memories that stay etched forever.",
    "time": "2 days ago",
    "daysAgo": 2,
    "views": 940,
    "image": "article2",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 2,
    "title": "Staying Connected",
    "description": "How alumni across different cities and generations continue to keep bonds and traditions alive.",
    "time": "4 days ago",
    "daysAgo": 4,
    "views": 1250,
    "image": "article3",
    "category": "Community",
    "readTime": "5 Min Read"
  },
  {
    "id": 3,
    "title": "Lessons That Lasted",
    "description": "Some of the most valuable lessons were not found in textbooks. Discover wisdom passed down through generations.",
    "time": "1 day ago",
    "daysAgo": 1,
    "views": 1480,
    "image": "article4",
    "category": "Alumni Journeys",
    "readTime": "6 Min Read"
  },
  {
    "id": 4,
    "title": "Trailblazers in Engineering & Design",
    "description": "How SKPD alumni shaped modern civic infrastructures and high-impact sustainable innovations.",
    "time": "5 days ago",
    "daysAgo": 5,
    "views": 780,
    "image": "article1",
    "category": "Achievements",
    "readTime": "4 Min Read"
  },
  {
    "id": 5,
    "title": "Alumni Annual Meet 2026",
    "description": "A day to reconnect with batchmates, revisit old corridors, and build new lifelong friendships together.",
    "time": "3 days ago",
    "daysAgo": 3,
    "views": 1890,
    "image": "event1",
    "category": "Events",
    "readTime": "3 Min Read"
  },
  {
    "id": 6,
    "title": "Whispers in the Library",
    "description": "Echoes of shared study circles, antique wooden tables, and bound volumes that shaped young minds.",
    "time": "6 days ago",
    "daysAgo": 6,
    "views": 650,
    "image": "article4",
    "category": "School Memories",
    "readTime": "5 Min Read"
  },
  {
    "id": 7,
    "title": "From Campus Courtyard to Global Tech",
    "description": "Navigating international careers while keeping the grounded ethics and community spirit intact.",
    "time": "8 days ago",
    "daysAgo": 8,
    "views": 1320,
    "image": "article1",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 8,
    "title": "Generations of Fellowship",
    "description": "Gathering under the banyan canopy: seniors mentoring new graduates into their professional careers.",
    "time": "7 days ago",
    "daysAgo": 7,
    "views": 1100,
    "image": "article3",
    "category": "Community",
    "readTime": "4 Min Read"
  },
  {
    "id": 9,
    "title": "Excellence in Public Service",
    "description": "Honoring alumni who dedicated decades to humanitarian missions and social welfare trusts.",
    "time": "9 days ago",
    "daysAgo": 9,
    "views": 890,
    "image": "event2",
    "category": "Achievements",
    "readTime": "6 Min Read"
  },
  {
    "id": 10,
    "title": "Heritage Walk & Lecture Series",
    "description": "Walking through history: uncovering architectural secrets of Govindappa Naicken Street campus.",
    "time": "10 days ago",
    "daysAgo": 10,
    "views": 1600,
    "image": "event3",
    "category": "Events",
    "readTime": "4 Min Read"
  },
  {
    "id": 11,
    "title": "Morning Assemblies & Reverence",
    "description": "The morning bell, the solemn hymns, and the shared values that anchored every student.",
    "time": "12 days ago",
    "daysAgo": 12,
    "views": 710,
    "image": "article2",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 12,
    "title": "Voices of Heritage and Legacy",
    "description": "Reflections from distinguished alumni remembering the mentors who set their life compass.",
    "time": "11 days ago",
    "daysAgo": 11,
    "views": 990,
    "image": "article4",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 13,
    "title": "Navigating Global Finance from Sowcarpet",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "13 days ago",
    "daysAgo": 13,
    "views": 500,
    "image": "article2",
    "category": "Alumni Journeys",
    "readTime": "3 Min Read"
  },
  {
    "id": 14,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "14 days ago",
    "daysAgo": 14,
    "views": 537,
    "image": "article3",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 15,
    "title": "North America SKPD Chapter Gala Dinner",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "15 days ago",
    "daysAgo": 15,
    "views": 574,
    "image": "article4",
    "category": "Community",
    "readTime": "5 Min Read"
  },
  {
    "id": 16,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "16 days ago",
    "daysAgo": 16,
    "views": 611,
    "image": "event1",
    "category": "Achievements",
    "readTime": "6 Min Read"
  },
  {
    "id": 17,
    "title": "Career Guidance Masterclass by Senior Executives",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "17 days ago",
    "daysAgo": 17,
    "views": 648,
    "image": "event2",
    "category": "Events",
    "readTime": "3 Min Read"
  },
  {
    "id": 18,
    "title": "The Code of Ethics in Artificial Intelligence",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "18 days ago",
    "daysAgo": 18,
    "views": 685,
    "image": "event3",
    "category": "Alumni Journeys",
    "readTime": "4 Min Read"
  },
  {
    "id": 19,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "19 days ago",
    "daysAgo": 19,
    "views": 722,
    "image": "article1",
    "category": "School Memories",
    "readTime": "5 Min Read"
  },
  {
    "id": 20,
    "title": "Student Internship Sponsorship by Alumni Firms",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "20 days ago",
    "daysAgo": 20,
    "views": 759,
    "image": "article2",
    "category": "Community",
    "readTime": "6 Min Read"
  },
  {
    "id": 21,
    "title": "Distinguished Alumni Lifetime Achievement 2025",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "21 days ago",
    "daysAgo": 21,
    "views": 796,
    "image": "article3",
    "category": "Achievements",
    "readTime": "3 Min Read"
  },
  {
    "id": 22,
    "title": "Heritage Architecture Walk & Guided Tour",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "22 days ago",
    "daysAgo": 22,
    "views": 833,
    "image": "article4",
    "category": "Events",
    "readTime": "4 Min Read"
  },
  {
    "id": 23,
    "title": "Civil Engineering Feats in High-Speed Rail",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "23 days ago",
    "daysAgo": 23,
    "views": 870,
    "image": "event1",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 24,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "24 days ago",
    "daysAgo": 24,
    "views": 907,
    "image": "event2",
    "category": "School Memories",
    "readTime": "6 Min Read"
  },
  {
    "id": 25,
    "title": "Rural Education Outreach by SKPD Alumni Volunteers",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "25 days ago",
    "daysAgo": 25,
    "views": 944,
    "image": "event3",
    "category": "Community",
    "readTime": "3 Min Read"
  },
  {
    "id": 26,
    "title": "National Judicial Service Recognition",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "26 days ago",
    "daysAgo": 26,
    "views": 981,
    "image": "article1",
    "category": "Achievements",
    "readTime": "4 Min Read"
  },
  {
    "id": 27,
    "title": "Alumni Cricket Premier League 2026 Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "27 days ago",
    "daysAgo": 27,
    "views": 1018,
    "image": "article2",
    "category": "Events",
    "readTime": "5 Min Read"
  },
  {
    "id": 28,
    "title": "Navigating Global Finance from Sowcarpet Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "28 days ago",
    "daysAgo": 28,
    "views": 1055,
    "image": "article3",
    "category": "Alumni Journeys",
    "readTime": "6 Min Read"
  },
  {
    "id": 29,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "29 days ago",
    "daysAgo": 29,
    "views": 1092,
    "image": "article4",
    "category": "School Memories",
    "readTime": "3 Min Read"
  },
  {
    "id": 30,
    "title": "North America SKPD Chapter Gala Dinner Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "30 days ago",
    "daysAgo": 30,
    "views": 1129,
    "image": "event1",
    "category": "Community",
    "readTime": "4 Min Read"
  },
  {
    "id": 31,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "31 days ago",
    "daysAgo": 31,
    "views": 1166,
    "image": "event2",
    "category": "Achievements",
    "readTime": "5 Min Read"
  },
  {
    "id": 32,
    "title": "Founders Day Celebrations & Lamp Lighting Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "32 days ago",
    "daysAgo": 32,
    "views": 1203,
    "image": "event3",
    "category": "Events",
    "readTime": "6 Min Read"
  },
  {
    "id": 33,
    "title": "The Code of Ethics in Artificial Intelligence Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "33 days ago",
    "daysAgo": 33,
    "views": 1240,
    "image": "article1",
    "category": "Alumni Journeys",
    "readTime": "3 Min Read"
  },
  {
    "id": 34,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "34 days ago",
    "daysAgo": 34,
    "views": 1277,
    "image": "article2",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 35,
    "title": "Student Internship Sponsorship by Alumni Firms Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "35 days ago",
    "daysAgo": 35,
    "views": 1314,
    "image": "article3",
    "category": "Community",
    "readTime": "5 Min Read"
  },
  {
    "id": 36,
    "title": "Distinguished Alumni Lifetime Achievement 2025 Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "36 days ago",
    "daysAgo": 36,
    "views": 1351,
    "image": "article4",
    "category": "Achievements",
    "readTime": "6 Min Read"
  },
  {
    "id": 37,
    "title": "Annual Inter-Batch Badminton Championship Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "37 days ago",
    "daysAgo": 37,
    "views": 1388,
    "image": "event1",
    "category": "Events",
    "readTime": "3 Min Read"
  },
  {
    "id": 38,
    "title": "Civil Engineering Feats in High-Speed Rail Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "38 days ago",
    "daysAgo": 38,
    "views": 1425,
    "image": "event2",
    "category": "Alumni Journeys",
    "readTime": "4 Min Read"
  },
  {
    "id": 39,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "39 days ago",
    "daysAgo": 39,
    "views": 1462,
    "image": "event3",
    "category": "School Memories",
    "readTime": "5 Min Read"
  },
  {
    "id": 40,
    "title": "Rural Education Outreach by SKPD Alumni Volunteers Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "40 days ago",
    "daysAgo": 40,
    "views": 1499,
    "image": "article1",
    "category": "Community",
    "readTime": "6 Min Read"
  },
  {
    "id": 41,
    "title": "National Judicial Service Recognition Part 2",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "41 days ago",
    "daysAgo": 41,
    "views": 1536,
    "image": "article2",
    "category": "Achievements",
    "readTime": "3 Min Read"
  },
  {
    "id": 42,
    "title": "Winter Musical Concert at the Historic Hall Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "42 days ago",
    "daysAgo": 42,
    "views": 1573,
    "image": "article3",
    "category": "Events",
    "readTime": "4 Min Read"
  },
  {
    "id": 43,
    "title": "Navigating Global Finance from Sowcarpet Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "43 days ago",
    "daysAgo": 43,
    "views": 1610,
    "image": "article4",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 44,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "44 days ago",
    "daysAgo": 44,
    "views": 1647,
    "image": "event1",
    "category": "School Memories",
    "readTime": "6 Min Read"
  },
  {
    "id": 45,
    "title": "North America SKPD Chapter Gala Dinner Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "45 days ago",
    "daysAgo": 45,
    "views": 1684,
    "image": "event2",
    "category": "Community",
    "readTime": "3 Min Read"
  },
  {
    "id": 46,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "46 days ago",
    "daysAgo": 46,
    "views": 1721,
    "image": "event3",
    "category": "Achievements",
    "readTime": "4 Min Read"
  },
  {
    "id": 47,
    "title": "Class of 1999 Silver Jubilee Homecoming Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "47 days ago",
    "daysAgo": 47,
    "views": 1758,
    "image": "article1",
    "category": "Events",
    "readTime": "5 Min Read"
  },
  {
    "id": 48,
    "title": "The Code of Ethics in Artificial Intelligence Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "48 days ago",
    "daysAgo": 48,
    "views": 1795,
    "image": "article2",
    "category": "Alumni Journeys",
    "readTime": "6 Min Read"
  },
  {
    "id": 49,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "49 days ago",
    "daysAgo": 49,
    "views": 1832,
    "image": "article3",
    "category": "School Memories",
    "readTime": "3 Min Read"
  },
  {
    "id": 50,
    "title": "Student Internship Sponsorship by Alumni Firms Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "50 days ago",
    "daysAgo": 50,
    "views": 1869,
    "image": "article4",
    "category": "Community",
    "readTime": "4 Min Read"
  },
  {
    "id": 51,
    "title": "Distinguished Alumni Lifetime Achievement 2025 Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "51 days ago",
    "daysAgo": 51,
    "views": 1906,
    "image": "event1",
    "category": "Achievements",
    "readTime": "5 Min Read"
  },
  {
    "id": 52,
    "title": "Class of 1984 Golden Reunion Luncheon Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "52 days ago",
    "daysAgo": 52,
    "views": 1943,
    "image": "event2",
    "category": "Events",
    "readTime": "6 Min Read"
  },
  {
    "id": 53,
    "title": "Civil Engineering Feats in High-Speed Rail Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "53 days ago",
    "daysAgo": 53,
    "views": 1980,
    "image": "event3",
    "category": "Alumni Journeys",
    "readTime": "3 Min Read"
  },
  {
    "id": 54,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "54 days ago",
    "daysAgo": 54,
    "views": 2017,
    "image": "article1",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 55,
    "title": "Rural Education Outreach by SKPD Alumni Volunteers Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "55 days ago",
    "daysAgo": 55,
    "views": 2054,
    "image": "article2",
    "category": "Community",
    "readTime": "5 Min Read"
  },
  {
    "id": 56,
    "title": "National Judicial Service Recognition Part 3",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "56 days ago",
    "daysAgo": 56,
    "views": 2091,
    "image": "article3",
    "category": "Achievements",
    "readTime": "6 Min Read"
  },
  {
    "id": 57,
    "title": "Annual General Body Meeting & Elections Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "57 days ago",
    "daysAgo": 57,
    "views": 2128,
    "image": "article4",
    "category": "Events",
    "readTime": "3 Min Read"
  },
  {
    "id": 58,
    "title": "Navigating Global Finance from Sowcarpet Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "58 days ago",
    "daysAgo": 58,
    "views": 2165,
    "image": "event1",
    "category": "Alumni Journeys",
    "readTime": "4 Min Read"
  },
  {
    "id": 59,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "59 days ago",
    "daysAgo": 59,
    "views": 2202,
    "image": "event2",
    "category": "School Memories",
    "readTime": "5 Min Read"
  },
  {
    "id": 60,
    "title": "North America SKPD Chapter Gala Dinner Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "60 days ago",
    "daysAgo": 60,
    "views": 2239,
    "image": "event3",
    "category": "Community",
    "readTime": "6 Min Read"
  },
  {
    "id": 61,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "61 days ago",
    "daysAgo": 61,
    "views": 2276,
    "image": "article1",
    "category": "Achievements",
    "readTime": "3 Min Read"
  },
  {
    "id": 62,
    "title": "Alumni Art & Photography Exhibition 2026 Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "62 days ago",
    "daysAgo": 62,
    "views": 2313,
    "image": "article2",
    "category": "Events",
    "readTime": "4 Min Read"
  },
  {
    "id": 63,
    "title": "The Code of Ethics in Artificial Intelligence Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "63 days ago",
    "daysAgo": 63,
    "views": 2350,
    "image": "article3",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 64,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "64 days ago",
    "daysAgo": 64,
    "views": 2387,
    "image": "article4",
    "category": "School Memories",
    "readTime": "6 Min Read"
  },
  {
    "id": 65,
    "title": "Student Internship Sponsorship by Alumni Firms Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "65 days ago",
    "daysAgo": 65,
    "views": 2424,
    "image": "event1",
    "category": "Community",
    "readTime": "3 Min Read"
  },
  {
    "id": 66,
    "title": "Distinguished Alumni Lifetime Achievement 2025 Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "66 days ago",
    "daysAgo": 66,
    "views": 2461,
    "image": "event2",
    "category": "Achievements",
    "readTime": "4 Min Read"
  },
  {
    "id": 67,
    "title": "SKPD Alumni Annual Awards Night 2026 Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "67 days ago",
    "daysAgo": 67,
    "views": 2498,
    "image": "event3",
    "category": "Events",
    "readTime": "5 Min Read"
  },
  {
    "id": 68,
    "title": "Civil Engineering Feats in High-Speed Rail Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "68 days ago",
    "daysAgo": 68,
    "views": 2535,
    "image": "article1",
    "category": "Alumni Journeys",
    "readTime": "6 Min Read"
  },
  {
    "id": 69,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "69 days ago",
    "daysAgo": 69,
    "views": 2572,
    "image": "article2",
    "category": "School Memories",
    "readTime": "3 Min Read"
  },
  {
    "id": 70,
    "title": "Rural Education Outreach by SKPD Alumni Volunteers Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "70 days ago",
    "daysAgo": 70,
    "views": 2609,
    "image": "article3",
    "category": "Community",
    "readTime": "4 Min Read"
  },
  {
    "id": 71,
    "title": "National Judicial Service Recognition Part 4",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "71 days ago",
    "daysAgo": 71,
    "views": 2646,
    "image": "article4",
    "category": "Achievements",
    "readTime": "5 Min Read"
  },
  {
    "id": 72,
    "title": "Campus Tree Plantation Drive & Eco-Pledge Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "72 days ago",
    "daysAgo": 72,
    "views": 2683,
    "image": "event1",
    "category": "Events",
    "readTime": "6 Min Read"
  },
  {
    "id": 73,
    "title": "Navigating Global Finance from Sowcarpet Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "73 days ago",
    "daysAgo": 73,
    "views": 2720,
    "image": "event2",
    "category": "Alumni Journeys",
    "readTime": "3 Min Read"
  },
  {
    "id": 74,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "74 days ago",
    "daysAgo": 74,
    "views": 2757,
    "image": "event3",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 75,
    "title": "North America SKPD Chapter Gala Dinner Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "75 days ago",
    "daysAgo": 75,
    "views": 2794,
    "image": "article1",
    "category": "Community",
    "readTime": "5 Min Read"
  },
  {
    "id": 76,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "76 days ago",
    "daysAgo": 76,
    "views": 2831,
    "image": "article2",
    "category": "Achievements",
    "readTime": "6 Min Read"
  },
  {
    "id": 77,
    "title": "Young Alumni Mixer & Start-up Pitch Night Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "77 days ago",
    "daysAgo": 77,
    "views": 2868,
    "image": "article3",
    "category": "Events",
    "readTime": "3 Min Read"
  },
  {
    "id": 78,
    "title": "The Code of Ethics in Artificial Intelligence Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "78 days ago",
    "daysAgo": 78,
    "views": 2905,
    "image": "article4",
    "category": "Alumni Journeys",
    "readTime": "4 Min Read"
  },
  {
    "id": 79,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "79 days ago",
    "daysAgo": 79,
    "views": 2942,
    "image": "event1",
    "category": "School Memories",
    "readTime": "5 Min Read"
  },
  {
    "id": 80,
    "title": "Student Internship Sponsorship by Alumni Firms Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "80 days ago",
    "daysAgo": 80,
    "views": 2979,
    "image": "event2",
    "category": "Community",
    "readTime": "6 Min Read"
  },
  {
    "id": 81,
    "title": "Distinguished Alumni Lifetime Achievement 2025 Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "81 days ago",
    "daysAgo": 81,
    "views": 516,
    "image": "event3",
    "category": "Achievements",
    "readTime": "3 Min Read"
  },
  {
    "id": 82,
    "title": "Alumni Family Day and Cultural Carnival Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "82 days ago",
    "daysAgo": 82,
    "views": 553,
    "image": "article1",
    "category": "Events",
    "readTime": "4 Min Read"
  },
  {
    "id": 83,
    "title": "Civil Engineering Feats in High-Speed Rail Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "83 days ago",
    "daysAgo": 83,
    "views": 590,
    "image": "article2",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 84,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "84 days ago",
    "daysAgo": 84,
    "views": 627,
    "image": "article3",
    "category": "School Memories",
    "readTime": "6 Min Read"
  },
  {
    "id": 85,
    "title": "Rural Education Outreach by SKPD Alumni Volunteers Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "85 days ago",
    "daysAgo": 85,
    "views": 664,
    "image": "article4",
    "category": "Community",
    "readTime": "3 Min Read"
  },
  {
    "id": 86,
    "title": "National Judicial Service Recognition Part 5",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "86 days ago",
    "daysAgo": 86,
    "views": 701,
    "image": "event1",
    "category": "Achievements",
    "readTime": "4 Min Read"
  },
  {
    "id": 87,
    "title": "Career Guidance Masterclass by Senior Executives Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "87 days ago",
    "daysAgo": 87,
    "views": 738,
    "image": "event2",
    "category": "Events",
    "readTime": "5 Min Read"
  },
  {
    "id": 88,
    "title": "Navigating Global Finance from Sowcarpet Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "88 days ago",
    "daysAgo": 88,
    "views": 775,
    "image": "event3",
    "category": "Alumni Journeys",
    "readTime": "6 Min Read"
  },
  {
    "id": 89,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "89 days ago",
    "daysAgo": 89,
    "views": 812,
    "image": "article1",
    "category": "School Memories",
    "readTime": "3 Min Read"
  },
  {
    "id": 90,
    "title": "North America SKPD Chapter Gala Dinner Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "90 days ago",
    "daysAgo": 90,
    "views": 849,
    "image": "article2",
    "category": "Community",
    "readTime": "4 Min Read"
  },
  {
    "id": 91,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "91 days ago",
    "daysAgo": 91,
    "views": 886,
    "image": "article3",
    "category": "Achievements",
    "readTime": "5 Min Read"
  },
  {
    "id": 92,
    "title": "Heritage Architecture Walk & Guided Tour Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "92 days ago",
    "daysAgo": 92,
    "views": 923,
    "image": "article4",
    "category": "Events",
    "readTime": "6 Min Read"
  },
  {
    "id": 93,
    "title": "The Code of Ethics in Artificial Intelligence Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "93 days ago",
    "daysAgo": 93,
    "views": 960,
    "image": "event1",
    "category": "Alumni Journeys",
    "readTime": "3 Min Read"
  },
  {
    "id": 94,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "94 days ago",
    "daysAgo": 94,
    "views": 997,
    "image": "event2",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 95,
    "title": "Student Internship Sponsorship by Alumni Firms Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "95 days ago",
    "daysAgo": 95,
    "views": 1034,
    "image": "event3",
    "category": "Community",
    "readTime": "5 Min Read"
  },
  {
    "id": 96,
    "title": "Distinguished Alumni Lifetime Achievement 2025 Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "96 days ago",
    "daysAgo": 96,
    "views": 1071,
    "image": "article1",
    "category": "Achievements",
    "readTime": "6 Min Read"
  },
  {
    "id": 97,
    "title": "Alumni Cricket Premier League 2026 Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "97 days ago",
    "daysAgo": 97,
    "views": 1108,
    "image": "article2",
    "category": "Events",
    "readTime": "3 Min Read"
  },
  {
    "id": 98,
    "title": "Civil Engineering Feats in High-Speed Rail Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "98 days ago",
    "daysAgo": 98,
    "views": 1145,
    "image": "article3",
    "category": "Alumni Journeys",
    "readTime": "4 Min Read"
  },
  {
    "id": 99,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "99 days ago",
    "daysAgo": 99,
    "views": 1182,
    "image": "article4",
    "category": "School Memories",
    "readTime": "5 Min Read"
  },
  {
    "id": 100,
    "title": "Rural Education Outreach by SKPD Alumni Volunteers Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "100 days ago",
    "daysAgo": 100,
    "views": 1219,
    "image": "event1",
    "category": "Community",
    "readTime": "6 Min Read"
  },
  {
    "id": 101,
    "title": "National Judicial Service Recognition Part 6",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "101 days ago",
    "daysAgo": 101,
    "views": 1256,
    "image": "event2",
    "category": "Achievements",
    "readTime": "3 Min Read"
  },
  {
    "id": 102,
    "title": "Founders Day Celebrations & Lamp Lighting Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "102 days ago",
    "daysAgo": 102,
    "views": 1293,
    "image": "event3",
    "category": "Events",
    "readTime": "4 Min Read"
  },
  {
    "id": 103,
    "title": "Navigating Global Finance from Sowcarpet Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "103 days ago",
    "daysAgo": 103,
    "views": 1330,
    "image": "article1",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 104,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "104 days ago",
    "daysAgo": 104,
    "views": 1367,
    "image": "article2",
    "category": "School Memories",
    "readTime": "6 Min Read"
  },
  {
    "id": 105,
    "title": "North America SKPD Chapter Gala Dinner Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "105 days ago",
    "daysAgo": 105,
    "views": 1404,
    "image": "article3",
    "category": "Community",
    "readTime": "3 Min Read"
  },
  {
    "id": 106,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "106 days ago",
    "daysAgo": 106,
    "views": 1441,
    "image": "article4",
    "category": "Achievements",
    "readTime": "4 Min Read"
  },
  {
    "id": 107,
    "title": "Annual Inter-Batch Badminton Championship Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "107 days ago",
    "daysAgo": 107,
    "views": 1478,
    "image": "event1",
    "category": "Events",
    "readTime": "5 Min Read"
  },
  {
    "id": 108,
    "title": "The Code of Ethics in Artificial Intelligence Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "108 days ago",
    "daysAgo": 108,
    "views": 1515,
    "image": "event2",
    "category": "Alumni Journeys",
    "readTime": "6 Min Read"
  },
  {
    "id": 109,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "109 days ago",
    "daysAgo": 109,
    "views": 1552,
    "image": "event3",
    "category": "School Memories",
    "readTime": "3 Min Read"
  },
  {
    "id": 110,
    "title": "Student Internship Sponsorship by Alumni Firms Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "110 days ago",
    "daysAgo": 110,
    "views": 1589,
    "image": "article1",
    "category": "Community",
    "readTime": "4 Min Read"
  },
  {
    "id": 111,
    "title": "Distinguished Alumni Lifetime Achievement 2025 Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "111 days ago",
    "daysAgo": 111,
    "views": 1626,
    "image": "article2",
    "category": "Achievements",
    "readTime": "5 Min Read"
  },
  {
    "id": 112,
    "title": "Winter Musical Concert at the Historic Hall Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "112 days ago",
    "daysAgo": 112,
    "views": 1663,
    "image": "article3",
    "category": "Events",
    "readTime": "6 Min Read"
  },
  {
    "id": 113,
    "title": "Civil Engineering Feats in High-Speed Rail Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "113 days ago",
    "daysAgo": 113,
    "views": 1700,
    "image": "article4",
    "category": "Alumni Journeys",
    "readTime": "3 Min Read"
  },
  {
    "id": 114,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "114 days ago",
    "daysAgo": 114,
    "views": 1737,
    "image": "event1",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 115,
    "title": "Rural Education Outreach by SKPD Alumni Volunteers Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "115 days ago",
    "daysAgo": 115,
    "views": 1774,
    "image": "event2",
    "category": "Community",
    "readTime": "5 Min Read"
  },
  {
    "id": 116,
    "title": "National Judicial Service Recognition Part 7",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "116 days ago",
    "daysAgo": 116,
    "views": 1811,
    "image": "event3",
    "category": "Achievements",
    "readTime": "6 Min Read"
  },
  {
    "id": 117,
    "title": "Class of 1999 Silver Jubilee Homecoming Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "117 days ago",
    "daysAgo": 117,
    "views": 1848,
    "image": "article1",
    "category": "Events",
    "readTime": "3 Min Read"
  },
  {
    "id": 118,
    "title": "Navigating Global Finance from Sowcarpet Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "118 days ago",
    "daysAgo": 118,
    "views": 1885,
    "image": "article2",
    "category": "Alumni Journeys",
    "readTime": "4 Min Read"
  },
  {
    "id": 119,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "119 days ago",
    "daysAgo": 119,
    "views": 1922,
    "image": "article3",
    "category": "School Memories",
    "readTime": "5 Min Read"
  },
  {
    "id": 120,
    "title": "North America SKPD Chapter Gala Dinner Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "120 days ago",
    "daysAgo": 120,
    "views": 1959,
    "image": "article4",
    "category": "Community",
    "readTime": "6 Min Read"
  },
  {
    "id": 121,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "121 days ago",
    "daysAgo": 121,
    "views": 1996,
    "image": "event1",
    "category": "Achievements",
    "readTime": "3 Min Read"
  },
  {
    "id": 122,
    "title": "Class of 1984 Golden Reunion Luncheon Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "122 days ago",
    "daysAgo": 122,
    "views": 2033,
    "image": "event2",
    "category": "Events",
    "readTime": "4 Min Read"
  },
  {
    "id": 123,
    "title": "The Code of Ethics in Artificial Intelligence Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "123 days ago",
    "daysAgo": 123,
    "views": 2070,
    "image": "event3",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 124,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "124 days ago",
    "daysAgo": 124,
    "views": 2107,
    "image": "article1",
    "category": "School Memories",
    "readTime": "6 Min Read"
  },
  {
    "id": 125,
    "title": "Student Internship Sponsorship by Alumni Firms Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "125 days ago",
    "daysAgo": 125,
    "views": 2144,
    "image": "article2",
    "category": "Community",
    "readTime": "3 Min Read"
  },
  {
    "id": 126,
    "title": "Distinguished Alumni Lifetime Achievement 2025 Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "126 days ago",
    "daysAgo": 126,
    "views": 2181,
    "image": "article3",
    "category": "Achievements",
    "readTime": "4 Min Read"
  },
  {
    "id": 127,
    "title": "Annual General Body Meeting & Elections Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "127 days ago",
    "daysAgo": 127,
    "views": 2218,
    "image": "article4",
    "category": "Events",
    "readTime": "5 Min Read"
  },
  {
    "id": 128,
    "title": "Civil Engineering Feats in High-Speed Rail Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "128 days ago",
    "daysAgo": 128,
    "views": 2255,
    "image": "event1",
    "category": "Alumni Journeys",
    "readTime": "6 Min Read"
  },
  {
    "id": 129,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "129 days ago",
    "daysAgo": 129,
    "views": 2292,
    "image": "event2",
    "category": "School Memories",
    "readTime": "3 Min Read"
  },
  {
    "id": 130,
    "title": "Rural Education Outreach by SKPD Alumni Volunteers Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "130 days ago",
    "daysAgo": 130,
    "views": 2329,
    "image": "event3",
    "category": "Community",
    "readTime": "4 Min Read"
  },
  {
    "id": 131,
    "title": "National Judicial Service Recognition Part 8",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "131 days ago",
    "daysAgo": 131,
    "views": 2366,
    "image": "article1",
    "category": "Achievements",
    "readTime": "5 Min Read"
  },
  {
    "id": 132,
    "title": "Alumni Art & Photography Exhibition 2026 Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "132 days ago",
    "daysAgo": 132,
    "views": 2403,
    "image": "article2",
    "category": "Events",
    "readTime": "6 Min Read"
  },
  {
    "id": 133,
    "title": "Navigating Global Finance from Sowcarpet Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "133 days ago",
    "daysAgo": 133,
    "views": 2440,
    "image": "article3",
    "category": "Alumni Journeys",
    "readTime": "3 Min Read"
  },
  {
    "id": 134,
    "title": "Chalkboards, Dust, and Inspiring Mathematics Classes Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "134 days ago",
    "daysAgo": 134,
    "views": 2477,
    "image": "article4",
    "category": "School Memories",
    "readTime": "4 Min Read"
  },
  {
    "id": 135,
    "title": "North America SKPD Chapter Gala Dinner Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "135 days ago",
    "daysAgo": 135,
    "views": 2514,
    "image": "event1",
    "category": "Community",
    "readTime": "5 Min Read"
  },
  {
    "id": 136,
    "title": "Pioneering Breakthrough in Cardiac Care Diagnostics Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "136 days ago",
    "daysAgo": 136,
    "views": 2551,
    "image": "event2",
    "category": "Achievements",
    "readTime": "6 Min Read"
  },
  {
    "id": 137,
    "title": "SKPD Alumni Annual Awards Night 2026 Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "137 days ago",
    "daysAgo": 137,
    "views": 2588,
    "image": "event3",
    "category": "Events",
    "readTime": "3 Min Read"
  },
  {
    "id": 138,
    "title": "The Code of Ethics in Artificial Intelligence Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "138 days ago",
    "daysAgo": 138,
    "views": 2625,
    "image": "article1",
    "category": "Alumni Journeys",
    "readTime": "4 Min Read"
  },
  {
    "id": 139,
    "title": "Dramatics Club: The Shakespeare Plays in the Auditorium Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "139 days ago",
    "daysAgo": 139,
    "views": 2662,
    "image": "article2",
    "category": "School Memories",
    "readTime": "5 Min Read"
  },
  {
    "id": 140,
    "title": "Student Internship Sponsorship by Alumni Firms Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "140 days ago",
    "daysAgo": 140,
    "views": 2699,
    "image": "article3",
    "category": "Community",
    "readTime": "6 Min Read"
  },
  {
    "id": 141,
    "title": "Distinguished Alumni Lifetime Achievement 2025 Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "141 days ago",
    "daysAgo": 141,
    "views": 2736,
    "image": "article4",
    "category": "Achievements",
    "readTime": "3 Min Read"
  },
  {
    "id": 142,
    "title": "Campus Tree Plantation Drive & Eco-Pledge Part 10",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "142 days ago",
    "daysAgo": 142,
    "views": 2773,
    "image": "event1",
    "category": "Events",
    "readTime": "4 Min Read"
  },
  {
    "id": 143,
    "title": "Civil Engineering Feats in High-Speed Rail Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "143 days ago",
    "daysAgo": 143,
    "views": 2810,
    "image": "event2",
    "category": "Alumni Journeys",
    "readTime": "5 Min Read"
  },
  {
    "id": 144,
    "title": "Bicycle Rides Home Through Sowcarpet Alleys Part 9",
    "description": "An inspiring feature showcasing the enduring values, milestone accomplishments, and shared brotherhood of the SKPD family.",
    "time": "144 days ago",
    "daysAgo": 144,
    "views": 2847,
    "image": "event3",
    "category": "School Memories",
    "readTime": "6 Min Read"
  }
].map((item) => ({
  ...item,
  image: imgMap[item.image] || article1
}));

const timeFilters = ['All', 'Popular', 'Latest'];
const categoryFilters = [
  'All',
  'Alumni Journeys',
  'School Memories',
  'Community',
  'Achievements',
  'Events',
];

const ITEMS_PER_PAGE = 12;

export default function ArticlesGridSection({ onSelectArticle }) {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort items dynamically
  const filteredStories = useMemo(() => {
    let result = [...allStoriesData];

    // Filter by Category
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Sort/Filter by Time or Popularity
    if (selectedTimeFilter === 'Popular') {
      result.sort((a, b) => b.views - a.views);
    } else if (selectedTimeFilter === 'Latest') {
      result.sort((a, b) => a.daysAgo - b.daysAgo);
    }

    return result;
  }, [selectedCategory, selectedTimeFilter]);

  // Pagination calculation (12 cards per page)
  const totalPages = Math.max(1, Math.ceil(filteredStories.length / ITEMS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);

  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const currentStories = filteredStories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleTimeFilter = (filter) => {
    setSelectedTimeFilter(filter);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const gridEl = document.getElementById('stories-grid');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (activePage <= 2) {
      return [1, 2, '...', totalPages];
    }
    if (activePage === 3) {
      return [1, 2, 3, '...', totalPages];
    }
    if (activePage >= totalPages - 1) {
      return [1, '...', totalPages - 1, totalPages];
    }
    return [1, '...', activePage, '...', totalPages];
  }, [totalPages, activePage]);

  return (
    <section className="articles-grid-section" id="stories-grid">
      <div className="articles-grid-container">
        {/* Centered Header */}
        <div className="articles-grid-header">
          <div className="art-pill-badge">
            <span className="art-pill-dot" aria-hidden="true" />
            <span className="art-pill-text">THE STORIES</span>
          </div>

          <h2 className="articles-grid-title">
            The Stories <span className="art-title-blue">We Share</span>
          </h2>

          <p className="articles-grid-subtitle">
            From familiar classrooms to new horizons, explore the stories that continue beyond school.
          </p>
        </div>

        {/* Content Layout: Sidebar + Grid */}
        <div className="articles-layout-row">
          {/* Left Sidebar */}
          <aside className="articles-sidebar" aria-label="Article Filters">
            {/* Top Time Filter Box */}
            <div className="sidebar-filter-box">
              {timeFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`sidebar-filter-btn ${selectedTimeFilter === filter ? 'active' : ''}`}
                  onClick={() => handleTimeFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Categories Menu */}
            <div className="sidebar-categories-section">
              <h4 className="sidebar-categories-title">Categories</h4>
              <div className="sidebar-categories-box">
                {categoryFilters.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`sidebar-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => handleCategoryFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Main Grid */}
          <div className="articles-cards-wrapper">
            <div className="articles-cards-grid">
              {currentStories.length > 0 ? (
                currentStories.map((item) => (
                  <article
                    className="story-catalog-card"
                    key={item.id}
                    onClick={() => onSelectArticle && onSelectArticle(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onSelectArticle && onSelectArticle(item)}
                  >
                    <div className="catalog-card-image-box">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="catalog-card-img"
                        loading="lazy"
                      />
                    </div>

                    <div className="catalog-card-content">
                      <h3 className="catalog-card-title">{item.title}</h3>
                      <p className="catalog-card-desc">{item.description}</p>

                      <div className="catalog-card-footer">
                        <span className="catalog-card-time">
                          <svg
                            viewBox="0 0 24 24"
                            className="meta-clock-icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {item.time}
                        </span>

                        <button
                          type="button"
                          className="catalog-learn-more-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectArticle && onSelectArticle(item);
                          }}
                        >
                          <span>Learn more</span>
                          <svg
                            viewBox="0 0 24 24"
                            className="learn-more-arrow"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="catalog-empty-notice">
                  <p>No articles found for this selection.</p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages >= 1 && (
              <div className="articles-pagination" aria-label="Pagination">
                <button
                  type="button"
                  className="pagination-nav-btn"
                  disabled={activePage === 1}
                  onClick={() => handlePageChange(activePage - 1)}
                  aria-label="Previous page"
                >
                  Previous
                </button>

                {pageNumbers.map((num, idx) =>
                  num === '...' ? (
                    <span key={`ellipsis-${idx}`} className="pagination-ellipsis">
                      ...
                    </span>
                  ) : (
                    <button
                      key={num}
                      type="button"
                      className={`pagination-num-btn ${activePage === num ? 'active' : ''}`}
                      onClick={() => handlePageChange(num)}
                      aria-label={`Page ${num}`}
                      aria-current={activePage === num ? 'page' : undefined}
                    >
                      {num}
                    </button>
                  )
                )}

                <button
                  type="button"
                  className="pagination-nav-btn"
                  disabled={activePage === totalPages}
                  onClick={() => handlePageChange(activePage + 1)}
                  aria-label="Next page"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
