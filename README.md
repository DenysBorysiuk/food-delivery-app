Backend deployed on Render.com as Free Web Services

Web Services on the free instance type are automatically spun down after 15
minutes of inactivity. When a new request for a free service comes in, Render
spins it up again so it can process the request.

This will cause a delay in the response of the first request after a period of
inactivity while the instance spins up.
