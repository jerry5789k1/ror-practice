# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever
set :output, "log/cron_log.log"
set :environment, :development # accroding to development.sqlite3
env :PATH, ENV['PATH'] #set the path to rbenv or it will show error /bin/sh: bundle: command not found
set :job_template, nil 
every 1.day, at: '10:00 am' do
   runner 'WebCrawler.update_new_stocks_turnover_data_to_db'
end
