<<<<<<< HEAD
import { db } from "@/lib/db";
import { Category, Chapter, Course } from "@prisma/client"
import { getProgress } from "./get-progress";

type CourseWithProgressWithCategory = Course & {
    category: Category;
    chapters: Chapter[];
    progress: number | null;
};

type DashboardCourses = {
    completedCourses: CourseWithProgressWithCategory[];
    coursesInProgress: CourseWithProgressWithCategory[];
}

export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
try {
    const purchasedCourses = await db.purchase.findMany({
        where: {
            userId: userId,
        },
        select: {
            course: {
                include:{
                    category: true,
                    chapters: {
                        where: {
                            isPublished: true,
                        }
                    }
                }
            }
        }
    })
=======
import { Category, Chapter, Course } from "@prisma/client";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";

type CourseWithProgressWithCategory = Course & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
}

export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
  try {
    const purchasedCourses = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              }
            }
          }
        }
      }
    });
>>>>>>> 9c2149202bd8147bcaf03280cb9e793eb4a3c424

    const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressWithCategory[];

    for (let course of courses) {
<<<<<<< HEAD
        const progress = await getProgress(userId, course.id);
        course["progress"] = progress;
    }

    const completedCourses = courses.filter((course) => course.progress === 100);
    const coursesInProgress = courses.filter((course) => (course.progress ?? 0) < 100)

    return{
        completedCourses,
        coursesInProgress
    }
} catch (error) {
    console.log("[GET_DASHBOARD_COURSES]", error);
    return{
        completedCourses: [],
        coursesInProgress: []
    }
}
=======
      const progress = await getProgress(userId, course.id);
      course["progress"] = progress;
    }

    const completedCourses = courses.filter((course) => course.progress === 100);
    const coursesInProgress = courses.filter((course) => (course.progress ?? 0) < 100);

    return {
      completedCourses,
      coursesInProgress,
    }
  } catch (error) {
    console.log("[GET_DASHBOARD_COURSES]", error);
    return {
      completedCourses: [],
      coursesInProgress: [],
    }
  }
>>>>>>> 9c2149202bd8147bcaf03280cb9e793eb4a3c424
}