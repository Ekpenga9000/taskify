import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const GamifiedUi = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="py-4 px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">Taskify</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <TrophyIcon className="w-5 h-5" />
            <span>100 Points</span>
          </div>
          <Button variant="ghost" size="icon">
            <SettingsIcon className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="bg-gray-100 dark:bg-gray-800 p-4 border-r">
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 font-medium"
                prefetch={false}
              >
                <CalendarIcon className="w-5 h-5" />
                Today
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 font-medium"
                prefetch={false}
              >
                <CalendarIcon className="w-5 h-5" />
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 font-medium"
                prefetch={false}
              >
                <CheckIcon className="w-5 h-5" />
                Completed
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-6">
          <div className="grid gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Today's Tasks</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Checkbox defaultChecked={false} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Finish report</div>
                      <div className="flex items-center gap-2">
                        <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs font-medium">
                          High
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                          Due Today
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress value={75} />
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Checkbox defaultChecked={false} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Call with client</div>
                      <div className="flex items-center gap-2">
                        <span className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">
                          Medium
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                          Due Tomorrow
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress value={50} />
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Checkbox defaultChecked />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Prepare for meeting</div>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-500 px-2 py-1 rounded-full text-xs font-medium">
                          Low
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress value={100} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Upcoming Tasks</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Checkbox defaultChecked={false} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Redesign website</div>
                      <div className="flex items-center gap-2">
                        <span className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">
                          Medium
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                          Due Next Week
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress value={25} />
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Checkbox defaultChecked={false} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">
                        Finish marketing campaign
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs font-medium">
                          High
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                          Due Next Month
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress value={40} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Completed Tasks</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Checkbox defaultChecked />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Finish quarterly report</div>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-500 px-2 py-1 rounded-full text-xs font-medium">
                          Low
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress value={100} />
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Checkbox defaultChecked />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Clean up inbox</div>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-500 px-2 py-1 rounded-full text-xs font-medium">
                          Low
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress value={100} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default GamifiedUi;
