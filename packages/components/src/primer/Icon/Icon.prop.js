import { string, number, oneOfType, oneOf } from 'prop-types'

export const iconName = {
  Accessibility16: 'Accessibility16',
  Accessibility24: 'Accessibility24',
  AccessibilityInset16: 'AccessibilityInset16',
  AccessibilityInset24: 'AccessibilityInset24',
  AIModel16: 'AIModel16',
  AIModel24: 'AIModel24',
  Alert16: 'Alert16',
  Alert24: 'Alert24',
  AlertFill12: 'AlertFill12',
  AlertFill16: 'AlertFill16',
  AlertFill24: 'AlertFill24',
  Apps16: 'Apps16',
  Apps24: 'Apps24',
  Archive16: 'Archive16',
  Archive24: 'Archive24',
  ArrowBoth16: 'ArrowBoth16',
  ArrowBoth24: 'ArrowBoth24',
  ArrowDown16: 'ArrowDown16',
  ArrowDown24: 'ArrowDown24',
  ArrowDownLeft16: 'ArrowDownLeft16',
  ArrowDownLeft24: 'ArrowDownLeft24',
  ArrowDownRight16: 'ArrowDownRight16',
  ArrowDownRight24: 'ArrowDownRight24',
  ArrowLeft16: 'ArrowLeft16',
  ArrowLeft24: 'ArrowLeft24',
  ArrowRight16: 'ArrowRight16',
  ArrowRight24: 'ArrowRight24',
  ArrowSwitch16: 'ArrowSwitch16',
  ArrowSwitch24: 'ArrowSwitch24',
  ArrowUp16: 'ArrowUp16',
  ArrowUp24: 'ArrowUp24',
  ArrowUpLeft16: 'ArrowUpLeft16',
  ArrowUpLeft24: 'ArrowUpLeft24',
  ArrowUpRight16: 'ArrowUpRight16',
  ArrowUpRight24: 'ArrowUpRight24',
  Beaker16: 'Beaker16',
  Beaker24: 'Beaker24',
  Bell16: 'Bell16',
  Bell24: 'Bell24',
  BellFill16: 'BellFill16',
  BellFill24: 'BellFill24',
  BellSlash16: 'BellSlash16',
  BellSlash24: 'BellSlash24',
  Blocked16: 'Blocked16',
  Blocked24: 'Blocked24',
  Bold16: 'Bold16',
  Bold24: 'Bold24',
  Book16: 'Book16',
  Book24: 'Book24',
  Bookmark16: 'Bookmark16',
  Bookmark24: 'Bookmark24',
  BookmarkFill24: 'BookmarkFill24',
  BookmarkFilled16: 'BookmarkFilled16',
  BookmarkSlash16: 'BookmarkSlash16',
  BookmarkSlash24: 'BookmarkSlash24',
  BookmarkSlashFill16: 'BookmarkSlashFill16',
  BookmarkSlashFill24: 'BookmarkSlashFill24',
  Briefcase16: 'Briefcase16',
  Briefcase24: 'Briefcase24',
  Broadcast16: 'Broadcast16',
  Broadcast24: 'Broadcast24',
  Browser16: 'Browser16',
  Browser24: 'Browser24',
  Bug16: 'Bug16',
  Bug24: 'Bug24',
  Cache16: 'Cache16',
  Cache24: 'Cache24',
  Calendar16: 'Calendar16',
  Calendar24: 'Calendar24',
  Check16: 'Check16',
  Check24: 'Check24',
  CheckCircle16: 'CheckCircle16',
  CheckCircle24: 'CheckCircle24',
  CheckCircleFill12: 'CheckCircleFill12',
  CheckCircleFill16: 'CheckCircleFill16',
  CheckCircleFill24: 'CheckCircleFill24',
  Checkbox16: 'Checkbox16',
  Checkbox24: 'Checkbox24',
  Checklist16: 'Checklist16',
  Checklist24: 'Checklist24',
  ChevronDown12: 'ChevronDown12',
  ChevronDown16: 'ChevronDown16',
  ChevronDown24: 'ChevronDown24',
  ChevronLeft12: 'ChevronLeft12',
  ChevronLeft16: 'ChevronLeft16',
  ChevronLeft24: 'ChevronLeft24',
  ChevronRight12: 'ChevronRight12',
  ChevronRight16: 'ChevronRight16',
  ChevronRight24: 'ChevronRight24',
  ChevronUp12: 'ChevronUp12',
  ChevronUp16: 'ChevronUp16',
  ChevronUp24: 'ChevronUp24',
  Circle16: 'Circle16',
  Circle24: 'Circle24',
  CircleSlash16: 'CircleSlash16',
  CircleSlash24: 'CircleSlash24',
  Clock16: 'Clock16',
  Clock24: 'Clock24',
  ClockFill16: 'ClockFill16',
  ClockFill24: 'ClockFill24',
  Cloud16: 'Cloud16',
  Cloud24: 'Cloud24',
  CloudOffline16: 'CloudOffline16',
  CloudOffline24: 'CloudOffline24',
  Code16: 'Code16',
  Code24: 'Code24',
  CodeOfConduct16: 'CodeOfConduct16',
  CodeOfConduct24: 'CodeOfConduct24',
  CodeReview16: 'CodeReview16',
  CodeReview24: 'CodeReview24',
  CodeSquare16: 'CodeSquare16',
  CodeSquare24: 'CodeSquare24',
  Codescan16: 'Codescan16',
  Codescan24: 'Codescan24',
  CodescanCheckmark16: 'CodescanCheckmark16',
  CodescanCheckmark24: 'CodescanCheckmark24',
  Codespaces16: 'Codespaces16',
  Codespaces24: 'Codespaces24',
  Columns16: 'Columns16',
  Columns24: 'Columns24',
  CommandPalette16: 'CommandPalette16',
  CommandPalette24: 'CommandPalette24',
  Comment16: 'Comment16',
  Comment24: 'Comment24',
  CommentDiscussion16: 'CommentDiscussion16',
  CommentDiscussion24: 'CommentDiscussion24',
  Container16: 'Container16',
  Container24: 'Container24',
  Copilot16: 'Copilot16',
  Copilot24: 'Copilot24',
  Copilot48: 'Copilot48',
  Copilot96: 'Copilot96',
  CopilotError16: 'CopilotError16',
  CopilotWarning16: 'CopilotWarning16',
  Copy16: 'Copy16',
  Copy24: 'Copy24',
  Cpu16: 'Cpu16',
  Cpu24: 'Cpu24',
  CreditCard16: 'CreditCard16',
  CreditCard24: 'CreditCard24',
  CrossReference16: 'CrossReference16',
  CrossReference24: 'CrossReference24',
  Dash16: 'Dash16',
  Dash24: 'Dash24',
  Database16: 'Database16',
  Database24: 'Database24',
  Dependabot16: 'Dependabot16',
  Dependabot24: 'Dependabot24',
  DesktopDownload16: 'DesktopDownload16',
  DesktopDownload24: 'DesktopDownload24',
  DeviceCamera16: 'DeviceCamera16',
  DeviceCamera24: 'DeviceCamera24',
  DeviceCameraVideo16: 'DeviceCameraVideo16',
  DeviceCameraVideo24: 'DeviceCameraVideo24',
  DeviceDesktop16: 'DeviceDesktop16',
  DeviceDesktop24: 'DeviceDesktop24',
  DeviceMobile16: 'DeviceMobile16',
  DeviceMobile24: 'DeviceMobile24',
  Devices16: 'Devices16',
  Devices24: 'Devices24',
  Diamond16: 'Diamond16',
  Diamond24: 'Diamond24',
  Diff16: 'Diff16',
  Diff24: 'Diff24',
  DiffAdded16: 'DiffAdded16',
  DiffAdded24: 'DiffAdded24',
  DiffIgnored16: 'DiffIgnored16',
  DiffIgnored24: 'DiffIgnored24',
  DiffModified16: 'DiffModified16',
  DiffModified24: 'DiffModified24',
  DiffRemoved16: 'DiffRemoved16',
  DiffRemoved24: 'DiffRemoved24',
  DiffRenamed16: 'DiffRenamed16',
  DiffRenamed24: 'DiffRenamed24',
  DiscussionClosed16: 'DiscussionClosed16',
  DiscussionClosed24: 'DiscussionClosed24',
  DiscussionDuplicate16: 'DiscussionDuplicate16',
  DiscussionDuplicate24: 'DiscussionDuplicate24',
  DiscussionOutdated16: 'DiscussionOutdated16',
  DiscussionOutdated24: 'DiscussionOutdated24',
  Dot16: 'Dot16',
  Dot24: 'Dot24',
  DotFill16: 'DotFill16',
  DotFill24: 'DotFill24',
  Download16: 'Download16',
  Download24: 'Download24',
  Duplicate16: 'Duplicate16',
  Duplicate24: 'Duplicate24',
  Ellipsis16: 'Ellipsis16',
  Ellipsis24: 'Ellipsis24',
  Eye16: 'Eye16',
  Eye24: 'Eye24',
  EyeClosed16: 'EyeClosed16',
  EyeClosed24: 'EyeClosed24',
  FeedDiscussion16: 'FeedDiscussion16',
  FeedForked16: 'FeedForked16',
  FeedHeart16: 'FeedHeart16',
  FeedIssueClosed16: 'FeedIssueClosed16',
  FeedIssueDraft16: 'FeedIssueDraft16',
  FeedIssueOpen16: 'FeedIssueOpen16',
  FeedIssueReopen16: 'FeedIssueReopen16',
  FeedMerged16: 'FeedMerged16',
  FeedPerson16: 'FeedPerson16',
  FeedPlus16: 'FeedPlus16',
  FeedPublic16: 'FeedPublic16',
  FeedPullRequestClosed16: 'FeedPullRequestClosed16',
  FeedPullRequestDraft16: 'FeedPullRequestDraft16',
  FeedPullRequestOpen16: 'FeedPullRequestOpen16',
  FeedRepo16: 'FeedRepo16',
  FeedRocket16: 'FeedRocket16',
  FeedStar16: 'FeedStar16',
  FeedTag16: 'FeedTag16',
  FeedTrophy16: 'FeedTrophy16',
  File16: 'File16',
  File24: 'File24',
  FileAdded16: 'FileAdded16',
  FileAdded24: 'FileAdded24',
  FileBadge16: 'FileBadge16',
  FileBadge24: 'FileBadge24',
  FileBinary16: 'FileBinary16',
  FileBinary24: 'FileBinary24',
  FileCode16: 'FileCode16',
  FileCode24: 'FileCode24',
  FileDiff16: 'FileDiff16',
  FileDiff24: 'FileDiff24',
  FileDirectory16: 'FileDirectory16',
  FileDirectory24: 'FileDirectory24',
  FileDirectoryFill16: 'FileDirectoryFill16',
  FileDirectoryFill24: 'FileDirectoryFill24',
  FileDirectoryOpenFill16: 'FileDirectoryOpenFill16',
  FileDirectoryOpenFill24: 'FileDirectoryOpenFill24',
  FileDirectorySymlink16: 'FileDirectorySymlink16',
  FileDirectorySymlink24: 'FileDirectorySymlink24',
  FileMedia16: 'FileMedia16',
  FileMedia24: 'FileMedia24',
  FileMoved16: 'FileMoved16',
  FileMoved24: 'FileMoved24',
  FileRemoved16: 'FileRemoved16',
  FileRemoved24: 'FileRemoved24',
  FileSubmodule16: 'FileSubmodule16',
  FileSubmodule24: 'FileSubmodule24',
  FileSymlinkFile16: 'FileSymlinkFile16',
  FileSymlinkFile24: 'FileSymlinkFile24',
  FileZip16: 'FileZip16',
  FileZip24: 'FileZip24',
  Filter16: 'Filter16',
  Filter24: 'Filter24',
  FilterRemove16: 'FilterRemove16',
  FilterRemove24: 'FilterRemove24',
  FiscalHost16: 'FiscalHost16',
  FiscalHost24: 'FiscalHost24',
  Flame16: 'Flame16',
  Flame24: 'Flame24',
  Fold16: 'Fold16',
  Fold24: 'Fold24',
  FoldDown16: 'FoldDown16',
  FoldDown24: 'FoldDown24',
  FoldUp16: 'FoldUp16',
  FoldUp24: 'FoldUp24',
  Gear16: 'Gear16',
  Gear24: 'Gear24',
  Gift16: 'Gift16',
  Gift24: 'Gift24',
  GitBranch16: 'GitBranch16',
  GitBranch24: 'GitBranch24',
  GitCommit16: 'GitCommit16',
  GitCommit24: 'GitCommit24',
  GitCompare16: 'GitCompare16',
  GitCompare24: 'GitCompare24',
  GitMerge16: 'GitMerge16',
  GitMerge24: 'GitMerge24',
  GitMergeQueue16: 'GitMergeQueue16',
  GitMergeQueue24: 'GitMergeQueue24',
  GitPullRequest16: 'GitPullRequest16',
  GitPullRequest24: 'GitPullRequest24',
  GitPullRequestClosed16: 'GitPullRequestClosed16',
  GitPullRequestClosed24: 'GitPullRequestClosed24',
  GitPullRequestDraft16: 'GitPullRequestDraft16',
  GitPullRequestDraft24: 'GitPullRequestDraft24',
  Globe16: 'Globe16',
  Globe24: 'Globe24',
  Goal16: 'Goal16',
  Goal24: 'Goal24',
  Grabber16: 'Grabber16',
  Grabber24: 'Grabber24',
  Graph16: 'Graph16',
  Graph24: 'Graph24',
  Hash16: 'Hash16',
  Hash24: 'Hash24',
  Heading16: 'Heading16',
  Heading24: 'Heading24',
  Heart16: 'Heart16',
  Heart24: 'Heart24',
  HeartFill16: 'HeartFill16',
  HeartFill24: 'HeartFill24',
  History16: 'History16',
  History24: 'History24',
  Home16: 'Home16',
  Home24: 'Home24',
  HomeFill16: 'HomeFill16',
  HomeFill24: 'HomeFill24',
  HorizontalRule16: 'HorizontalRule16',
  HorizontalRule24: 'HorizontalRule24',
  Hourglass16: 'Hourglass16',
  Hourglass24: 'Hourglass24',
  Hubot16: 'Hubot16',
  Hubot24: 'Hubot24',
  IdBadge16: 'IdBadge16',
  IdBadge24: 'IdBadge24',
  Image16: 'Image16',
  Image24: 'Image24',
  Inbox16: 'Inbox16',
  Inbox24: 'Inbox24',
  Infinity16: 'Infinity16',
  Infinity24: 'Infinity24',
  Info16: 'Info16',
  Info24: 'Info24',
  IssueClosed16: 'IssueClosed16',
  IssueClosed24: 'IssueClosed24',
  IssueDraft16: 'IssueDraft16',
  IssueDraft24: 'IssueDraft24',
  IssueOpened16: 'IssueOpened16',
  IssueOpened24: 'IssueOpened24',
  IssueReopened16: 'IssueReopened16',
  IssueReopened24: 'IssueReopened24',
  IssueTrackedBy16: 'IssueTrackedBy16',
  IssueTrackedBy24: 'IssueTrackedBy24',
  IssueTracks16: 'IssueTracks16',
  IssueTracks24: 'IssueTracks24',
  Italic16: 'Italic16',
  Italic24: 'Italic24',
  Iterations16: 'Iterations16',
  Iterations24: 'Iterations24',
  KebabHorizontal16: 'KebabHorizontal16',
  KebabHorizontal24: 'KebabHorizontal24',
  Key16: 'Key16',
  Key24: 'Key24',
  KeyAsterisk16: 'KeyAsterisk16',
  KeyAsterisk24: 'KeyAsterisk24',
  Law16: 'Law16',
  Law24: 'Law24',
  LightBulb16: 'LightBulb16',
  LightBulb24: 'LightBulb24',
  Link16: 'Link16',
  Link24: 'Link24',
  LinkExternal16: 'LinkExternal16',
  LinkExternal24: 'LinkExternal24',
  ListOrdered16: 'ListOrdered16',
  ListOrdered24: 'ListOrdered24',
  ListUnordered16: 'ListUnordered16',
  ListUnordered24: 'ListUnordered24',
  Location16: 'Location16',
  Location24: 'Location24',
  Lock16: 'Lock16',
  Lock24: 'Lock24',
  Log16: 'Log16',
  Log24: 'Log24',
  LogoGist16: 'LogoGist16',
  LogoGist24: 'LogoGist24',
  LogoGithub16: 'LogoGithub16',
  LogoGithub24: 'LogoGithub24',
  Mail16: 'Mail16',
  Mail24: 'Mail24',
  MarkGithub16: 'MarkGithub16',
  MarkGithub24: 'MarkGithub24',
  Markdown16: 'Markdown16',
  Markdown24: 'Markdown24',
  Megaphone16: 'Megaphone16',
  Megaphone24: 'Megaphone24',
  Mention16: 'Mention16',
  Mention24: 'Mention24',
  Meter16: 'Meter16',
  Meter24: 'Meter24',
  Milestone16: 'Milestone16',
  Milestone24: 'Milestone24',
  Mirror16: 'Mirror16',
  Mirror24: 'Mirror24',
  Moon16: 'Moon16',
  Moon24: 'Moon24',
  MortarBoard16: 'MortarBoard16',
  MortarBoard24: 'MortarBoard24',
  MovetoBottom16: 'MovetoBottom16',
  MovetoBottom24: 'MovetoBottom24',
  MovetoEnd16: 'MovetoEnd16',
  MovetoEnd24: 'MovetoEnd24',
  MovetoStart16: 'MovetoStart16',
  MovetoStart24: 'MovetoStart24',
  MovetoTop16: 'MovetoTop16',
  MovetoTop24: 'MovetoTop24',
  MultiSelect16: 'MultiSelect16',
  MultiSelect24: 'MultiSelect24',
  Mute16: 'Mute16',
  Mute24: 'Mute24',
  NoEntry16: 'NoEntry16',
  NoEntry24: 'NoEntry24',
  NoEntryFill12: 'NoEntryFill12',
  NorthStar16: 'NorthStar16',
  NorthStar24: 'NorthStar24',
  Note16: 'Note16',
  Note24: 'Note24',
  Number16: 'Number16',
  Number24: 'Number24',
  Organization16: 'Organization16',
  Organization24: 'Organization24',
  Package16: 'Package16',
  Package24: 'Package24',
  PackageDependencies16: 'PackageDependencies16',
  PackageDependencies24: 'PackageDependencies24',
  PackageDependents16: 'PackageDependents16',
  PackageDependents24: 'PackageDependents24',
  Paintbrush16: 'Paintbrush16',
  Paintbrush24: 'Paintbrush24',
  PaperAirplane16: 'PaperAirplane16',
  PaperAirplane24: 'PaperAirplane24',
  Paperclip16: 'Paperclip16',
  Paperclip24: 'Paperclip24',
  PasskeyFill16: 'PasskeyFill16',
  PasskeyFill24: 'PasskeyFill24',
  Paste16: 'Paste16',
  Paste24: 'Paste24',
  Pencil16: 'Pencil16',
  Pencil24: 'Pencil24',
  People16: 'People16',
  People24: 'People24',
  Person16: 'Person16',
  Person24: 'Person24',
  PersonAdd16: 'PersonAdd16',
  PersonAdd24: 'PersonAdd24',
  PersonFill16: 'PersonFill16',
  PersonFill24: 'PersonFill24',
  Pin16: 'Pin16',
  Pin24: 'Pin24',
  PinSlash16: 'PinSlash16',
  PinSlash24: 'PinSlash24',
  PivotColumn16: 'PivotColumn16',
  PivotColumn24: 'PivotColumn24',
  Play16: 'Play16',
  Play24: 'Play24',
  Plug16: 'Plug16',
  Plug24: 'Plug24',
  Plus16: 'Plus16',
  Plus24: 'Plus24',
  PlusCircle16: 'PlusCircle16',
  PlusCircle24: 'PlusCircle24',
  Project16: 'Project16',
  Project24: 'Project24',
  ProjectRoadmap16: 'ProjectRoadmap16',
  ProjectRoadmap24: 'ProjectRoadmap24',
  ProjectSymlink16: 'ProjectSymlink16',
  ProjectSymlink24: 'ProjectSymlink24',
  ProjectTemplate16: 'ProjectTemplate16',
  ProjectTemplate24: 'ProjectTemplate24',
  Pulse16: 'Pulse16',
  Pulse24: 'Pulse24',
  Question16: 'Question16',
  Question24: 'Question24',
  Quote16: 'Quote16',
  Quote24: 'Quote24',
  Read16: 'Read16',
  Read24: 'Read24',
  Redo16: 'Redo16',
  Redo24: 'Redo24',
  RelFilePath16: 'RelFilePath16',
  RelFilePath24: 'RelFilePath24',
  Reply16: 'Reply16',
  Reply24: 'Reply24',
  Repo16: 'Repo16',
  Repo24: 'Repo24',
  RepoClone16: 'RepoClone16',
  RepoClone24: 'RepoClone24',
  RepoDelete24: 'RepoDelete24',
  RepoDeleted16: 'RepoDeleted16',
  RepoForked16: 'RepoForked16',
  RepoForked24: 'RepoForked24',
  RepoLocked16: 'RepoLocked16',
  RepoLocked24: 'RepoLocked24',
  RepoPull16: 'RepoPull16',
  RepoPull24: 'RepoPull24',
  RepoPush16: 'RepoPush16',
  RepoPush24: 'RepoPush24',
  RepoTemplate16: 'RepoTemplate16',
  RepoTemplate24: 'RepoTemplate24',
  Report16: 'Report16',
  Report24: 'Report24',
  Rocket16: 'Rocket16',
  Rocket24: 'Rocket24',
  Rows16: 'Rows16',
  Rows24: 'Rows24',
  Rss16: 'Rss16',
  Rss24: 'Rss24',
  Ruby16: 'Ruby16',
  Ruby24: 'Ruby24',
  ScreenFull16: 'ScreenFull16',
  ScreenFull24: 'ScreenFull24',
  ScreenNormal16: 'ScreenNormal16',
  ScreenNormal24: 'ScreenNormal24',
  Search16: 'Search16',
  Search24: 'Search24',
  Server16: 'Server16',
  Server24: 'Server24',
  Share16: 'Share16',
  Share24: 'Share24',
  ShareAndroid16: 'ShareAndroid16',
  ShareAndroid24: 'ShareAndroid24',
  Shield16: 'Shield16',
  Shield24: 'Shield24',
  ShieldCheck16: 'ShieldCheck16',
  ShieldCheck24: 'ShieldCheck24',
  ShieldLock16: 'ShieldLock16',
  ShieldLock24: 'ShieldLock24',
  ShieldSlash16: 'ShieldSlash16',
  ShieldSlash24: 'ShieldSlash24',
  ShieldX16: 'ShieldX16',
  ShieldX24: 'ShieldX24',
  SidebarCollapse16: 'SidebarCollapse16',
  SidebarCollapse24: 'SidebarCollapse24',
  SidebarExpand16: 'SidebarExpand16',
  SidebarExpand24: 'SidebarExpand24',
  SignIn16: 'SignIn16',
  SignIn24: 'SignIn24',
  SignOut16: 'SignOut16',
  SignOut24: 'SignOut24',
  SingleSelect16: 'SingleSelect16',
  SingleSelect24: 'SingleSelect24',
  Skip16: 'Skip16',
  Skip24: 'Skip24',
  SkipFill16: 'SkipFill16',
  SkipFill24: 'SkipFill24',
  Sliders16: 'Sliders16',
  Sliders24: 'Sliders24',
  Smiley16: 'Smiley16',
  Smiley24: 'Smiley24',
  SortAsc16: 'SortAsc16',
  SortAsc24: 'SortAsc24',
  SortDesc16: 'SortDesc16',
  SortDesc24: 'SortDesc24',
  SparkleFill16: 'SparkleFill16',
  SparkleFill24: 'SparkleFill24',
  Sponsortiers16: 'Sponsortiers16',
  Sponsortiers24: 'Sponsortiers24',
  Square16: 'Square16',
  Square24: 'Square24',
  SquareFill16: 'SquareFill16',
  SquareFill24: 'SquareFill24',
  Squirrel16: 'Squirrel16',
  Squirrel24: 'Squirrel24',
  Stack16: 'Stack16',
  Stack24: 'Stack24',
  Star16: 'Star16',
  Star24: 'Star24',
  StarFill16: 'StarFill16',
  StarFill24: 'StarFill24',
  Stop16: 'Stop16',
  Stop24: 'Stop24',
  Stopwatch16: 'Stopwatch16',
  Stopwatch24: 'Stopwatch24',
  Strikethrough16: 'Strikethrough16',
  Strikethrough24: 'Strikethrough24',
  Sun16: 'Sun16',
  Sun24: 'Sun24',
  Sync16: 'Sync16',
  Sync24: 'Sync24',
  Tab16: 'Tab16',
  Tab24: 'Tab24',
  TabExternal16: 'TabExternal16',
  TabExternal24: 'TabExternal24',
  Table16: 'Table16',
  Table24: 'Table24',
  Tag16: 'Tag16',
  Tag24: 'Tag24',
  Tasklist16: 'Tasklist16',
  Tasklist24: 'Tasklist24',
  Telescope16: 'Telescope16',
  Telescope24: 'Telescope24',
  TelescopeFill16: 'TelescopeFill16',
  TelescopeFill24: 'TelescopeFill24',
  Terminal16: 'Terminal16',
  Terminal24: 'Terminal24',
  ThreeBars16: 'ThreeBars16',
  ThreeBars24: 'ThreeBars24',
  Thumbsdown16: 'Thumbsdown16',
  Thumbsdown24: 'Thumbsdown24',
  Thumbsup16: 'Thumbsup16',
  Thumbsup24: 'Thumbsup24',
  Tools16: 'Tools16',
  Tools24: 'Tools24',
  TrackedByClosedCompleted16: 'TrackedByClosedCompleted16',
  TrackedByClosedCompleted24: 'TrackedByClosedCompleted24',
  TrackedByClosedNotPlanned16: 'TrackedByClosedNotPlanned16',
  TrackedByClosedNotPlanned24: 'TrackedByClosedNotPlanned24',
  Trash16: 'Trash16',
  Trash24: 'Trash24',
  TriangleDown16: 'TriangleDown16',
  TriangleDown24: 'TriangleDown24',
  TriangleLeft16: 'TriangleLeft16',
  TriangleLeft24: 'TriangleLeft24',
  TriangleRight16: 'TriangleRight16',
  TriangleRight24: 'TriangleRight24',
  TriangleUp16: 'TriangleUp16',
  TriangleUp24: 'TriangleUp24',
  Trophy16: 'Trophy16',
  Trophy24: 'Trophy24',
  Typography16: 'Typography16',
  Typography24: 'Typography24',
  Undo16: 'Undo16',
  Undo24: 'Undo24',
  Unfold16: 'Unfold16',
  Unfold24: 'Unfold24',
  Unlink16: 'Unlink16',
  Unlink24: 'Unlink24',
  Unlock16: 'Unlock16',
  Unlock24: 'Unlock24',
  Unmute16: 'Unmute16',
  Unmute24: 'Unmute24',
  Unread16: 'Unread16',
  Unread24: 'Unread24',
  Unverified16: 'Unverified16',
  Unverified24: 'Unverified24',
  Upload16: 'Upload16',
  Upload24: 'Upload24',
  Verified16: 'Verified16',
  Verified24: 'Verified24',
  Versions16: 'Versions16',
  Versions24: 'Versions24',
  Video16: 'Video16',
  Video24: 'Video24',
  Webhook16: 'Webhook16',
  Workflow16: 'Workflow16',
  Workflow24: 'Workflow24',
  X12: 'X12',
  X16: 'X16',
  X24: 'X24',
  XCircle16: 'XCircle16',
  XCircle24: 'XCircle24',
  XCircleFill12: 'XCircleFill12',
  XCircleFill16: 'XCircleFill16',
  XCircleFill24: 'XCircleFill24',
  Zap16: 'Zap16',
  Zap24: 'Zap24',
  ZoomIn16: 'ZoomIn16',
  ZoomIn24: 'ZoomIn24',
  ZoomOut16: 'ZoomOut16',
  ZoomOut24: 'ZoomOut24',
}

export const iconSize = {
  small: 16,
  medium: 32,
  large: 64,
}

export const iconAlign = {
  middle: 'middle',
  'text-bottom': 'text-bottom',
  'text-top': 'text-top',
  top: 'top',
  unset: 'unset',
}

export const iconNameKeys = Object.keys(iconName)
export const iconNameKeysDefault = iconNameKeys[0]
export const iconSizeKeys = Object.keys(iconSize)
export const iconSizeKeysDefault = iconSizeKeys[0]
export const iconAlignKeys = Object.keys(iconAlign)
export const iconAlignKeysDefault = iconAlignKeys[0]

export const propTypes = {
  className: string,
  ariaLabel: string,
  icon: oneOf(iconNameKeys).isRequired,
  height: number,
  width: number,
  size: oneOfType([number, oneOf(iconSizeKeys)]),
  fill: string,
  verticalAlign: oneOf(iconAlignKeys),
}

export const defaultProps = {
  className: 'octicon',
  ariaLabel: null,
  height: null,
  width: null,
  size: 16,
  fill: 'currentColor',
  verticalAlign: 'text-bottom',
}
