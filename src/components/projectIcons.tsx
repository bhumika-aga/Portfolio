import {
  AccountTree,
  Apartment,
  LocalHospital,
  LocalPharmacy,
  Quiz,
  SvgIconComponent,
} from "@mui/icons-material";
import { Project } from "../data/projects";

// Maps a project's icon key to an MUI icon used across the bento cards.
export const PROJECT_ICONS: Record<Project["icon"], SvgIconComponent> = {
  workflow: AccountTree,
  pharmacy: LocalPharmacy,
  building: Apartment,
  hospital: LocalHospital,
  exam: Quiz,
};
