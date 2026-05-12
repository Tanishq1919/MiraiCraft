import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CourseCatalog } from "./pages/CourseCatalog";
import { CourseDetails } from "./pages/CourseDetails";
import { ProjectMarketplace } from "./pages/ProjectMarketplace";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { LearnerDashboardLayout } from "./pages/learner/Layout";
import { LearnerOverview } from "./pages/learner/Overview";
import { LearnerMyCourses } from "./pages/learner/MyCourses";
import { LearnerCoursePlayer } from "./pages/learner/CoursePlayer";
import { LearnerMyProjects } from "./pages/learner/MyProjects";
import { LearnerPortfolio } from "./pages/learner/Portfolio";
import { LearnerActivity } from "./pages/learner/Activity";
import { LearnerSettings } from "./pages/learner/Settings";
import { InstructorDashboardLayout } from "./pages/instructor/Layout";
import { InstructorOverview } from "./pages/instructor/Overview";
import { InstructorMyCourses } from "./pages/instructor/MyCourses";
import { InstructorCreateCourse } from "./pages/instructor/CreateCourse";
import { InstructorEarnings } from "./pages/instructor/Earnings";
import { InstructorSettings } from "./pages/instructor/Settings";
import { ClientDashboardLayout } from "./pages/client/Layout";
import { ClientOverview } from "./pages/client/Overview";
import { ClientPostProject } from "./pages/client/PostProject";
import { ClientMyProjects } from "./pages/client/MyProjects";
import { ClientContracts } from "./pages/client/Contracts";
import { ClientSettings } from "./pages/client/Settings";
import { AdminDashboardLayout } from "./pages/admin/Layout";
import { AdminOverview } from "./pages/admin/Overview";
import { AdminUsers } from "./pages/admin/Users";
import { AdminContracts } from "./pages/admin/Contracts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/courses",
    Component: CourseCatalog,
  },
  {
    path: "/courses/:id",
    Component: CourseDetails,
  },
  {
    path: "/projects",
    Component: ProjectMarketplace,
  },
  {
    path: "/projects/:id",
    Component: ProjectDetails,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/learner",
    Component: LearnerDashboardLayout,
    children: [
      { index: true, Component: LearnerOverview },
      { path: "courses", Component: LearnerMyCourses },
      { path: "courses/:id/player", Component: LearnerCoursePlayer },
      { path: "projects", Component: LearnerMyProjects },
      { path: "portfolio", Component: LearnerPortfolio },
      { path: "activity", Component: LearnerActivity },
      { path: "settings", Component: LearnerSettings },
    ],
  },
  {
    path: "/instructor",
    Component: InstructorDashboardLayout,
    children: [
      { index: true, Component: InstructorOverview },
      { path: "courses", Component: InstructorMyCourses },
      { path: "create-course", Component: InstructorCreateCourse },
      { path: "earnings", Component: InstructorEarnings },
      { path: "settings", Component: InstructorSettings },
    ],
  },
  {
    path: "/client",
    Component: ClientDashboardLayout,
    children: [
      { index: true, Component: ClientOverview },
      { path: "post-project", Component: ClientPostProject },
      { path: "projects", Component: ClientMyProjects },
      { path: "contracts", Component: ClientContracts },
      { path: "settings", Component: ClientSettings },
    ],
  },
  {
    path: "/admin",
    Component: AdminDashboardLayout,
    children: [
      { index: true, Component: AdminOverview },
      { path: "users", Component: AdminUsers },
      { path: "contracts", Component: AdminContracts },
    ],
  },
]);
