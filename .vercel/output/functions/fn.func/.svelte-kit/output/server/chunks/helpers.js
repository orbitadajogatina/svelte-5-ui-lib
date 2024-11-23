const fileList = [
  "src/lib/accordion/Accordion.svelte",
  "src/lib/accordion/AccordionItem.svelte",
  "src/lib/alert/Alert.svelte",
  "src/lib/avatar/Avatar.svelte",
  "src/lib/badge/Badge.svelte",
  "src/lib/banner/Banner.svelte",
  "src/lib/bottom-navigation/BottomNav.svelte",
  "src/lib/bottom-navigation/BottomNavHeader.svelte",
  "src/lib/bottom-navigation/BottomNavHeaderItem.svelte",
  "src/lib/bottom-navigation/BottomNavItem.svelte",
  "src/lib/breadcrumb/Breadcrumb.svelte",
  "src/lib/breadcrumb/BreadcrumbItem.svelte",
  "src/lib/buttongroup/ButtonGroup.svelte",
  "src/lib/buttons/Button.svelte",
  "src/lib/buttons/GradientButton.svelte",
  "src/lib/cards/Card.svelte",
  "src/lib/chart/Chart.svelte",
  "src/lib/darkmode/Darkmode.svelte",
  "src/lib/device-mockups/Android.svelte",
  "src/lib/device-mockups/DefaultMockup.svelte",
  "src/lib/device-mockups/Desktop.svelte",
  "src/lib/device-mockups/DeviceMockup.svelte",
  "src/lib/device-mockups/Ios.svelte",
  "src/lib/device-mockups/Laptop.svelte",
  "src/lib/device-mockups/Smartwatch.svelte",
  "src/lib/device-mockups/Tablet.svelte",
  "src/lib/drawer/Drawer.svelte",
  "src/lib/drawer/Drawerhead.svelte",
  "src/lib/dropdown/Dropdown.svelte",
  "src/lib/dropdown/DropdownDivider.svelte",
  "src/lib/dropdown/DropdownFooter.svelte",
  "src/lib/dropdown/DropdownHeader.svelte",
  "src/lib/dropdown/DropdownLi.svelte",
  "src/lib/dropdown/DropdownUl.svelte",
  "src/lib/footer/Footer.svelte",
  "src/lib/footer/FooterBrand.svelte",
  "src/lib/footer/FooterCopyright.svelte",
  "src/lib/footer/FooterIcon.svelte",
  "src/lib/footer/FooterLi.svelte",
  "src/lib/footer/FooterUl.svelte",
  "src/lib/forms/checkbox/Checkbox.svelte",
  "src/lib/forms/checkbox-button/CheckboxButton.svelte",
  "src/lib/forms/dropzone/Dropzone.svelte",
  "src/lib/forms/fileupload/Fileupload.svelte",
  "src/lib/forms/floating-label-input/FloatingLabelInput.svelte",
  "src/lib/forms/helper/Helper.svelte",
  "src/lib/forms/input/Input.svelte",
  "src/lib/forms/input-addon/InputAddon.svelte",
  "src/lib/forms/label/Label.svelte",
  "src/lib/forms/radio/Radio.svelte",
  "src/lib/forms/radio-button/RadioButton.svelte",
  "src/lib/forms/range/Range.svelte",
  "src/lib/forms/search/Search.svelte",
  "src/lib/forms/select/Select.svelte",
  "src/lib/forms/textarea/Textarea.svelte",
  "src/lib/forms/toggle/Toggle.svelte",
  "src/lib/gallery/Gallery.svelte",
  "src/lib/indicator/Indicator.svelte",
  "src/lib/kbd/Kbd.svelte",
  "src/lib/list-group/Listgroup.svelte",
  "src/lib/list-group/ListgroupItem.svelte",
  "src/lib/mega-menu/MegaMenu.svelte",
  "src/lib/modal/Modal.svelte",
  "src/lib/nav/NavBrand.svelte",
  "src/lib/nav/NavHamburger.svelte",
  "src/lib/nav/NavLi.svelte",
  "src/lib/nav/NavUl.svelte",
  "src/lib/nav/Navbar.svelte",
  "src/lib/pagination/Pagination.svelte",
  "src/lib/pagination/PaginationItem.svelte",
  "src/lib/popover/Popover.svelte",
  "src/lib/progress/Progressbar.svelte",
  "src/lib/rating/AdvancedRating.svelte",
  "src/lib/rating/Heart.svelte",
  "src/lib/rating/Rating.svelte",
  "src/lib/rating/RatingComment.svelte",
  "src/lib/rating/Review.svelte",
  "src/lib/rating/ScoreRating.svelte",
  "src/lib/rating/Star.svelte",
  "src/lib/rating/Thumbup.svelte",
  "src/lib/sidebar/Sidebar.svelte",
  "src/lib/sidebar/SidebarBrand.svelte",
  "src/lib/sidebar/SidebarButton.svelte",
  "src/lib/sidebar/SidebarCta.svelte",
  "src/lib/sidebar/SidebarDropdownWrapper.svelte",
  "src/lib/sidebar/SidebarGroup.svelte",
  "src/lib/sidebar/SidebarItem.svelte",
  "src/lib/skeleton/CardPlaceholder.svelte",
  "src/lib/skeleton/ImagePlaceholder.svelte",
  "src/lib/skeleton/ListPlaceholder.svelte",
  "src/lib/skeleton/Skeleton.svelte",
  "src/lib/skeleton/TestimonialPlaceholder.svelte",
  "src/lib/skeleton/TextPlaceholder.svelte",
  "src/lib/skeleton/VideoPlaceholder.svelte",
  "src/lib/skeleton/WidgetPlaceholder.svelte",
  "src/lib/spinner/Spinner.svelte",
  "src/lib/table/Table.svelte",
  "src/lib/table/TableBody.svelte",
  "src/lib/table/TableBodyCell.svelte",
  "src/lib/table/TableBodyRow.svelte",
  "src/lib/table/TableHead.svelte",
  "src/lib/table/TableHeadCell.svelte",
  "src/lib/table/TableSearch.svelte",
  "src/lib/tabs/TabItem.svelte",
  "src/lib/tabs/Tabs.svelte",
  "src/lib/timeline/Activity.svelte",
  "src/lib/timeline/ActivityItem.svelte",
  "src/lib/timeline/Group.svelte",
  "src/lib/timeline/GroupItem.svelte",
  "src/lib/timeline/Timeline.svelte",
  "src/lib/timeline/TimelineItem.svelte",
  "src/lib/toast/Toast.svelte",
  "src/lib/toolbar/Toolbar.svelte",
  "src/lib/toolbar/ToolbarButton.svelte",
  "src/lib/toolbar/ToolbarGroup.svelte",
  "src/lib/tooltip/Tooltip.svelte",
  "src/lib/typography/anchor/A.svelte",
  "src/lib/typography/blockquote/Blockquote.svelte",
  "src/lib/typography/descriptionlist/DescriptionList.svelte",
  "src/lib/typography/heading/Heading.svelte",
  "src/lib/typography/hr/Hr.svelte",
  "src/lib/typography/img/EnhancedImg.svelte",
  "src/lib/typography/img/Img.svelte",
  "src/lib/typography/img/ImgEnhanced.svelte",
  "src/lib/typography/layout/Layout.svelte",
  "src/lib/typography/list/Li.svelte",
  "src/lib/typography/list/List.svelte",
  "src/lib/typography/mark/Mark.svelte",
  "src/lib/typography/paragraph/P.svelte",
  "src/lib/typography/secondary/Secondary.svelte",
  "src/lib/typography/span/Span.svelte",
  "src/lib/utils/CloseButton.svelte",
  "src/lib/video/Video.svelte"
];
function removeHyphensAndCapitalize(str) {
  if (!str.includes("-")) {
    return str;
  }
  const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());
  return capitalized.replace(/-|\s{2,}/g, " ");
}
function toKebabCase(inputString) {
  return inputString.toLowerCase().replace(/\s+/g, "-");
}
function splitAndCapitalize(text) {
  const parts = text.split("/");
  if (!parts.length) return "";
  return parts[parts.length - 1].charAt(0).toUpperCase() + parts[parts.length - 1].slice(1);
}
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
function copyToClipboard(text) {
  return navigator.clipboard.writeText(text).then(() => {
    console.log("Text copied to clipboard");
  }).catch((err) => {
    console.error("Failed to copy: ", err);
    throw err;
  });
}
function toUpperSnakeCase(text) {
  return text.replace(/[\s-]/g, "_").toUpperCase();
}
const isGeneratedCodeOverflow = (code) => {
  const lines = code.split("\n");
  return lines.length > 7;
};
const isSvelteOverflow = (sveltefile, exampleModules) => {
  const filePath = `./examples/${sveltefile}`;
  const fileContent = exampleModules[filePath];
  if (typeof fileContent !== "string") {
    console.warn(`File content for ${filePath} is not found or not a string`);
    return false;
  }
  const lines = fileContent.split("\n");
  return lines.length > 7;
};
function getFilteredFileNames(dirName) {
  const filteredPaths = fileList.filter((path) => path.includes(`src/lib/${dirName}`));
  const fileNames = filteredPaths.map((path) => {
    const parts = path.split("/");
    const fileNameWithExtension = parts[parts.length - 1];
    const fileNameWithoutExtension = fileNameWithExtension.substring(0, fileNameWithExtension.lastIndexOf("."));
    return fileNameWithoutExtension;
  });
  return fileNames;
}
function replaceLibImport(componentString) {
  return componentString.replace(/from "\$lib"/g, "from 'svelte-5-ui-lib'");
}
function getExampleFileName(selectedExample, exampleArr) {
  const foundExample = exampleArr.find((example) => example.name === selectedExample);
  if (!foundExample) {
    selectedExample = exampleArr[0].name || "";
  }
  const result = selectedExample.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
  return `${result}.svelte`;
}
export {
  isGeneratedCodeOverflow as a,
  replaceLibImport as b,
  capitalizeFirstLetter as c,
  copyToClipboard as d,
  getFilteredFileNames as e,
  toKebabCase as f,
  getExampleFileName as g,
  isSvelteOverflow as i,
  removeHyphensAndCapitalize as r,
  splitAndCapitalize as s,
  toUpperSnakeCase as t
};
