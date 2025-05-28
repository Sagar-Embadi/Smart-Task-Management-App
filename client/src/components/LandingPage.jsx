import { CheckSquare, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className={`min-h-screen transition-colors duration-300 dark:bg-gray-900 text-white bg-white text-gray-900`}>
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 bg-gray-900/90 border-gray-700 border-gray-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <CheckSquare className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">TaskFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle/>
              <button 
              onClick={()=>navigate('/login')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 border dark:border-gray-600 hover:bg-gray-800 text-gray-300 border-gray-300 hover:bg-gray-50 text-gray-700`}>
                Login
              </button>
              <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 dark:bg-blue-600 hover:bg-blue-700 text-white bg-blue-600 hover:bg-blue-700 text-white`} onClick={()=>navigate('/signup')}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                Organize Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Life{" "}
                </span>
                Effortlessly
              </h1>
              <p className={`text-xl leading-relaxed dark:text-gray-300 text-gray-600`}>
                Transform your productivity with TaskFlow - the intelligent to-do list that adapts to your workflow. 
                Organize tasks, set priorities, and achieve your goals with our intuitive interface.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Smart Organization</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-500" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Time Tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-purple-500" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Team Collaboration</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
              <div>
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className={`text-sm dark:text-gray-400 text-gray-500 `}>Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">1M+</div>
                <div className={`text-sm dark:text-gray-400 text-gray-500`}>Tasks Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">99.9%</div>
                <div className={`text-sm dark:text-gray-400 text-gray-500`}>Uptime</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className={`relative rounded-2xl p-8 shadow-2xl transition-all duration-300 dark:bg-gray-800 border border-gray-700 bg-white border border-gray-200 text-gray-900 dark:text-gray-100`}>
              {/* Mock Todo Interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Today's Tasks</h3>
                  <span className="text-sm text-blue-600 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
                    3 remaining
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className={`flex items-center space-x-3 p-3 rounded-lg dark:bg-gray-700 bg-gray-50`}>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="line-through opacity-60">Review project proposal</span>
                  </div>
                  
                  <div className={`flex items-center space-x-3 p-3 rounded-lg dark:bg-gray-700 bg-gray-50`}>
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                    <span>Prepare presentation slides</span>
                    <span className="ml-auto text-sm text-orange-500">High</span>
                  </div>
                  
                  <div className={`flex items-center space-x-3 p-3 rounded-lg dark:bg-gray-700 bg-gray-50`}>
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                    <span>Team sync meeting</span>
                    <span className="ml-auto text-sm text-blue-500">2:00 PM</span>
                  </div>
                  
                  <div className={`flex items-center space-x-3 p-3 rounded-lg dark:bg-gray-700 bg-gray-50`}>
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                    <span>Update documentation</span>
                    <span className="ml-auto text-sm text-green-500">Low</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Daily Progress</span>
                    <span>25%</span>
                  </div>
                  <div className={`h-2 rounded-full dark:bg-gray-700 bg-gray-200`}>
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </main>
    </div>
  );
}