(()=>{let e=[];document.querySelector(".addProject").addEventListener("click",(()=>{let t=document.querySelector(".formContainer");if(t.children.length<1){let n=document.createElement("div");n.classList.add("addProjectForm"),t.appendChild(n);let d=document.createElement("input");d.classList.add("projectNameInput"),d.maxLength=25,n.appendChild(d);let c=document.createElement("button");c.classList.add("projectAddInput"),c.textContent="Add",n.appendChild(c),c.addEventListener("click",(()=>{const t=document.querySelector(".projects");if(""!=d.value){const n=document.createElement("div");n.textContent=d.value,e.push(d.value),t.appendChild(n)}}));let l=document.createElement("button");l.classList.add("projectCancelInput"),l.textContent="Cancel",n.appendChild(l),l.addEventListener("click",(()=>{t.innerHTML=""}))}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQSxJQUFJQSxFQUFhLEdBS01DLFNBQVNDLGNBQWMsZUFDL0JDLGlCQUFpQixTQUFTLEtBQ2pDLElBQUlDLEVBQWdCSCxTQUFTQyxjQUFjLGtCQUUzQyxHQUFJRSxFQUFjQyxTQUFTQyxPQUFTLEVBQUUsQ0FDbEMsSUFBSUMsRUFBaUJOLFNBQVNPLGNBQWMsT0FDNUNELEVBQWVFLFVBQVVDLElBQUksa0JBQzdCTixFQUFjTyxZQUFZSixHQUUxQixJQUFJSyxFQUFtQlgsU0FBU08sY0FBYyxTQUM5Q0ksRUFBaUJILFVBQVVDLElBQUksb0JBQy9CRSxFQUFpQkMsVUFBWSxHQUM3Qk4sRUFBZUksWUFBWUMsR0FFM0IsSUFBSUUsRUFBa0JiLFNBQVNPLGNBQWMsVUFDN0NNLEVBQWdCTCxVQUFVQyxJQUFJLG1CQUM5QkksRUFBZ0JDLFlBQWMsTUFDOUJSLEVBQWVJLFlBQVlHLEdBRTNCQSxFQUFnQlgsaUJBQWlCLFNBQVMsS0FDdEMsTUFBTWEsRUFBV2YsU0FBU0MsY0FBYyxhQUV4QyxHQUE4QixJQUExQlUsRUFBaUJLLE1BRWQsQ0FDSCxNQUFNQyxFQUFVakIsU0FBU08sY0FBYyxPQUN2Q1UsRUFBUUgsWUFBY0gsRUFBaUJLLE1BQ3ZDakIsRUFBV21CLEtBQUtQLEVBQWlCSyxPQUNqQ0QsRUFBU0wsWUFBWU8sRUFDekIsS0FHSixJQUFJRSxFQUFxQm5CLFNBQVNPLGNBQWMsVUFDaERZLEVBQW1CWCxVQUFVQyxJQUFJLHNCQUNqQ1UsRUFBbUJMLFlBQWMsU0FDakNSLEVBQWVJLFlBQVlTLEdBRTNCQSxFQUFtQmpCLGlCQUFpQixTQUFTLEtBQ3pDQyxFQUFjaUIsVUFBWSxFQUFFLEdBRXBDLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG15UHJvamVjdHMgPSBbXTtcblxuXG5cbihmdW5jdGlvbiBhZGRQcm9qZWN0ICgpe1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChmb3JtQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgbGV0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0Rm9ybScpO1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSlcblxuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZUlucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0Lm1heExlbmd0aCA9IDI1O1xuICAgICAgICAgICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0QWRkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHByb2plY3RBZGRJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0QWRkSW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3RBZGRJbnB1dC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICAgICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEFkZElucHV0KTtcblxuICAgICAgICAgICAgcHJvamVjdEFkZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbXlQcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdENhbmNlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0Q2FuY2VsSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENhbmNlbElucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Q2FuY2VsSW5wdXQudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RDYW5jZWxJbnB1dCk7XG5cbiAgICAgICAgICAgIHByb2plY3RDYW5jZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xufSkoKTtcbiAgICAgICAgICAgICAgICBcblxuKGZ1bmN0aW9uIHZpZXdQcm9qZWN0ICgpIHtcblxufSkoKVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuXG5cbiAgICAgICAgXG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgIl0sIm5hbWVzIjpbIm15UHJvamVjdHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybUNvbnRhaW5lciIsImNoaWxkcmVuIiwibGVuZ3RoIiwiYWRkUHJvamVjdEZvcm0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0TmFtZUlucHV0IiwibWF4TGVuZ3RoIiwicHJvamVjdEFkZElucHV0IiwidGV4dENvbnRlbnQiLCJwcm9qZWN0cyIsInZhbHVlIiwicHJvamVjdCIsInB1c2giLCJwcm9qZWN0Q2FuY2VsSW5wdXQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9